"use client";

import { CodeBlock, a11yLight } from "react-code-blocks";


export default function Coding({ filename, code, language }) {
    return (
        <div className="space-y-2">
            <p className="text-black/50">{filename}</p>
            <div className="border-4 border-black/10 rounded-lg">
                <CodeBlock text={code}
                    codeBlock
                    showLineNumbers
                    theme={a11yLight}
                    language={language}
                />
            </div>
        </div>
    );
}
