"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

export async function uploadPhoto(formData: FormData) {
    const file = formData.get("file") as File;
    const metadataStr = formData.get("metadata") as string;

    if (!file || !metadataStr) return { error: "Missing data" };

    try {
        const metadata = JSON.parse(metadataStr);
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}-${file.name.replaceAll(" ", "_")}`;

        // 1. Save the image to public/photos
        const publicPath = path.join(process.cwd(), "public/photography");

        // Ensure directory exists
        await fs.mkdir(publicPath, { recursive: true });
        await fs.writeFile(path.join(publicPath, filename), buffer);

        // 2. Update the JSON data
        const jsonPath = path.join(process.cwd(), "app/(photography)/data/photos.json");
        const currentRaw = await fs.readFile(jsonPath, "utf8");
        const currentData = JSON.parse(currentRaw);

        currentData.push({
            ...metadata,
            id: Date.now().toString(),
            src: `/photography/${filename}`,
        });

        await fs.writeFile(jsonPath, JSON.stringify(currentData, null, 2));

        // 3. Clear the cache so the gallery updates immediately
        revalidatePath("/photography");

        return { success: true };
    } catch (err) {
        console.error(err);
        return { error: "Upload failed" };
    }
}
