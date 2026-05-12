"use client";

import { useState } from "react";
import { uploadPhoto } from "../actions";

export default function AdminPage() {
    const [isUploading, setIsUploading] = useState(false);
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsUploading(true);

        const metadata = {
            location: formData.get("location") || "N/A",
            camera: formData.get("camera") || "N/A",
            lens: formData.get("lens") || "N/A",
            aperture: formData.get("aperture") || "N/A",
            shutter: formData.get("shutter") || "N/A",
            date: formData.get("date") || "N/A",
            width: Number(formData.get("width")),
            height: Number(formData.get("height")),
        };

        formData.append("metadata", JSON.stringify(metadata));

        const result = await uploadPhoto(formData);

        setIsUploading(false);
        if (result.success) {
            alert("Photo uploaded and gallery updated!");
            (document.getElementById("upload-form") as HTMLFormElement).reset();
        } else {
            alert(result.error);
        }
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            alert("Wrong password!");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex flex-col items-center justify-center h-[85vh] text-black">
                <form onSubmit={handleLogin} className="space-y-2">
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full p-2 border focus:outline-none bg-white text-center text-sm"
                    />
                    <button type="submit" className="w-full bg-black text-white text-sm leading-0 pt-5 pb-4 font-medium">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto p-12 text-black">
            <h1 className="text-3xl font-medium tracking-tighter mb-6">Add New Photo</h1>
            <form id="upload-form" action={handleSubmit} className="flex flex-col items-center gap-4">
                <div className="flex gap-3 mb-5 flex-col w-full">
                    <label htmlFor="file">Choose Image</label>
                    <input id="file" type="file" name="file" className="bg-black text-white border font-normal p-2 hover:cursor-pointer" required />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <input name="width" placeholder="Width (px)" type="number" className="border p-2" required />
                    <input name="height" placeholder="Height (px)" type="number" className="border p-2" required />
                </div>

                <input name="location" placeholder="Location (e.g. Seattle)" className="border p-2 w-full" />

                <select name="camera" className="w-full p-2 border">
                    <option value="Sony A7Riii">Sony A7Riii</option>
                    <option value="Leica Q1">Leica Q1</option>
                    <option value="Sony RX100 VA">Sony RX100 VA</option>
                    <option value="Lumix GH5">Lumix GH5</option>
                    <option value="Canon T70">Canon T70</option>
                    <option value="Pentax IQZoom 160">Pentax IQZoom 160</option>
                </select>

                <select name="lens" className="w-full p-2 border">
                    <option value="Sony FE 40mm f/2.5 G">Sony FE 40mm f/2.5 G</option>
                    <option value="Tamron 70-180mm f/2.8 Di III VXD FE">Tamron 70-180mm f/2.8 Di III VXD FE</option>
                    <option value="Summilux 28mm f/1.7">Summilux 28mm f/1.7</option>
                    <option value="24 - 70mm f/1.8">24 - 70mm f/1.8</option>
                    <option value="Lumix G X Vario 12 - 35mm f/2.8">Lumix G X Vario 12 - 35mm f/2.8</option>
                    <option value="Canon Normal 50mm f/1.8 FD">Canon Normal 50mm f/1.8 FD</option>
                    <option value="38 - 160mm f/4.5">Pentax IQZoom 160</option>
                </select>

                <div className="grid grid-cols-2 gap-4">
                    <input name="aperture" placeholder="Aperture" className="border p-2 w-full" />
                    <input name="shutter" placeholder="Shutter Speed" className="border p-2 w-full" />
                </div>

                <input name="date" type="date" className="border p-2 w-full" />

                <button
                    type="submit"
                    disabled={isUploading}
                    className="bg-black text-white p-3 text-sm disabled:bg-gray-400 w-full"
                >
                    {isUploading ? "Processing..." : "Add to Portfolio"}
                </button>
            </form>
        </div>
    );
}
