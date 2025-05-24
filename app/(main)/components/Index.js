"use client";

import { motion } from "motion/react";


export default function Index() {
    const indexEntries = [
        {
            title: "Honesty",
            image: "/works/honesty/cover.png",
            year: 2025
        },
        {
            title: "Portfolio V1",
            image: "/works/honesty/cover.png",
            year: 2024
        },
        {
            title: "Musée",
            image: "/works/honesty/cover.png",
            year: 2023
        },
    ];

    return (
        <div className="bg-red-100 flex flex-col">
            {indexEntries.map((project, index) => (
                <div key={index} className="border-2 border-black bg-white h-[4rem] relative flex items-center">
                    <p className="z-10 absolute p-5 mix-blend-difference text-white">{project.title}</p>
                    <motion.div
                        className="bg-black w-full h-1/3"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        whileHover={{
                            height: "100%"
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
