"use client";

import { CopyBlock, tomorrow } from "react-code-blocks";


export default function CodeBlock({ code, language }) {
    return (
        <div className="w-">
            <CopyBlock text={code}
                copied="false"
                codeBlock
                showLineNumbers={false}
                theme={tomorrow}
                language={language}
            />
        </div>

    );
}
