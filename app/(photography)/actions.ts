"use server";
import fs from 'fs';
import path from 'path';

export async function saveMetadata(newPhoto: any) {
    if (process.env.NODE_ENV === "production") {
        return { success: false, error: "This only works on your local computer!" };
    }

    try {
        const filePath = path.join(process.cwd(), 'data/photos.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        const photos = JSON.parse(fileData);

        photos.push(newPhoto);

        fs.writeFileSync(filePath, JSON.stringify(photos, null, 2));
        return { success: true };
    } catch (e) {
        return { success: false, error: "Save failed." };
    }
}
