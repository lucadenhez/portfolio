"use client";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from "motion/react";
import { useState, useEffect } from 'react';


export default function Coding(props) {
    const getRandomRotation = () => (Math.random() * 8 - 4).toFixed(2); // -4deg to +4deg

    const [initialRotation, setInitialRotation] = useState(0);
    const [hoverRotation, setHoverRotation] = useState(0);

    useEffect(() => {
        setInitialRotation(getRandomRotation());
        let hoverRotationTemp = getRandomRotation();

        while (hoverRotationTemp === initialRotation) {
            hoverRotationTemp = getRandomRotation();
        }

        setHoverRotation(hoverRotationTemp);
    }, []);

    return (
        <motion.div
            className="space-y-2" {...props}
            initial={"initial"}
            whileHover={"hover"}
            variants={{
                initial: { rotate: `${initialRotation}deg` },
                hover: { rotate: `${hoverRotation}deg`, scale: 1.02 }
            }}
        >
            <p className="text-black/50">{props.filename}</p>
            <div className="rounded-lg w-full max-w-full">
                <SyntaxHighlighter
                    language={props.language}
                    style={oneLight}
                    wrapLines
                    showLineNumbers
                    className="shadow-sm w-full max-w-full"
                    customStyle={{
                        width: "100%",
                        maxWidth: "75vw",
                        minWidth: 0,
                        overflowX: "auto",
                        display: "block"
                    }}
                >
                    {props.code}
                </SyntaxHighlighter>
            </div>
        </motion.div>
    );
}
