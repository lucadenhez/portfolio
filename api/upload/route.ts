import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const metadata = JSON.parse(formData.get("metadata") as string);

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");

    // Save Image
    await fs.writeFile(
        path.join(process.cwd(), "public/photography/" + filename),
        buffer
    );

    // Update JSON
    const jsonPath = path.join(process.cwd(), "app/(photography)/data/photos.json");
    const currentData = JSON.parse(await fs.readFile(jsonPath, "utf8"));

    currentData.push({
        ...metadata,
        src: `/photos/${filename}`,
    });

    await fs.writeFile(jsonPath, JSON.stringify(currentData, null, 2));

    return NextResponse.json({ success: true });
}
