"use client";

import { smoothScrollToHash } from "../../../../lib/smooth-scroll";
import { useState, useEffect } from "react";

function getAnchor(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/[ ]/g, '-');
}

export default function TableOfContents({ headers }, ...props) {
    const [activeHeader, setActiveHeader] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const headerElements = headers.map(h =>
                document.getElementById(getAnchor(h.value))
            );

            // 150px offset from top of screen
            const scrollPosition = window.scrollY + 150;

            let currentActive = 0;
            headerElements.forEach((el, index) => {
                if (el && el.offsetTop <= scrollPosition) {
                    currentActive = index;
                }
            });

            setActiveHeader(currentActive);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [headers]);

    return (
        <div className="mt-10 p-5 rounded-xl flex flex-col gap-5 sticky " {...props}>
            <p className="ml-5 text-sm font-medium">In This Project</p>
            <div className="flex flex-col gap-5">
                {headers.map((header, index) => (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            const success = smoothScrollToHash(`#${getAnchor(header.value)}`);
                        }}
                        key={index}
                        className="hover:cursor-pointer text-left flex items-center justify-start w-full gap-5 transition-all duration-500 ease-in-out"
                    >
                        <div
                            className="bg-[#4905e7] w-0.75 self-stretch rounded-full transition-all duration-300"
                            style={{
                                opacity: activeHeader === index ? 1 : 0,
                            }}
                        />
                        <p
                            className={`font-medium text-sm tracking-tight leading-tight transition-all duration-500 ease-in-out
                                ${activeHeader === index ? "text-white" : "text-[#787878] hover:text-[#efefef]"}`}
                        >
                            {header.value}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}
