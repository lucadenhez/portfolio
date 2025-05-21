import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Coding(props) {
    return (
        <div className="space-y-2" {...props}>
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
        </div>
    );
}
