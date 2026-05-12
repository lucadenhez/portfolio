import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
    if (process.env.NODE_ENV !== "development") {
        return new Response("Not allowed in production", { status: 403 });
    }
    
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const metadata = JSON.parse(formData.get("metadata") as string);

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");

    await fs.writeFile(
        path.join(process.cwd(), "public/photography/" + filename),
        buffer
    );

    const jsonPath = path.join(process.cwd(), "app/(photography)/data/photos.json");
    const currentData = JSON.parse(await fs.readFile(jsonPath, "utf8"));

    currentData.unshift({
        ...metadata,
        src: `/photos/${filename}`,
    });

    await fs.writeFile(jsonPath, JSON.stringify(currentData, null, 2));

    return NextResponse.json({ success: true });
}
