"use client";

import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
    const [mode, setMode] = useState("");

    const backgroundColors = {
        "": "#F5F5F5",
        "UI/UX": "#FF8A9F",
        "Tinkering": "#FF5A0D"
    };

    return (
        <div
            className="bg-white m-10 h-[calc(100vh-5rem)]"
            style={{ cursor: 'url("/cursors/vintage-rock-on.png"), auto' }}
        >
            <div
                className="-z-10 rounded-3xl h-full transition-colors duration-300 ease-in-out "
                style={{ backgroundColor: backgroundColors[mode] }}
            >
                <div className="px-50 w-full flex justify-between items-center h-full z-10">
                    <Link
                        href="ui"
                        onMouseEnter={() => setMode("UI/UX")}
                        onMouseLeave={() => setMode("")}
                        style={{ cursor: 'url("/cursors/vintage-hand-pointer.png"), auto' }}
                    >
                        <h1
                            className="p-5 opacity-40 hover:opacity-100 text-3xl font-medium tracking-tighter transition-all duration-300 ease-in-out"
                            style={{ color: mode == "" ? "#000000" : "#ffffff" }}
                        >UI / UX</h1>
                    </Link>

                    <hr
                        className="w-48 h-1 mx-auto border-0 rounded-sm transition-all duration-300 ease-in-out"
                        style={{ backgroundColor: mode == "" ? "#000000" : "#ffffff", opacity: mode == "" ? "30%" : "100%" }}
                    />

                    <Link
                        href="tinkering"
                        onMouseEnter={() => setMode("Tinkering")}
                        onMouseLeave={() => setMode("")}
                        style={{ cursor: 'url("/cursors/vintage-hand-pointer.png"), auto' }}
                    >
                        <h1
                            className="p-5 opacity-40 hover:opacity-100 text-3xl font-medium tracking-tighter transition-all duration-300 ease-in-out"
                            style={{ color: mode == "" ? "#000000" : "#ffffff" }}
                        >Tinkering</h1>
                    </Link>
                </div>
                <h1 className="pointer-events-none uppercase absolute inset-0 flex items-center justify-center text-[17vw] font-bold tracking-tighter text-white/30">{mode}</h1>
            </div>
        </div>
    );
}
