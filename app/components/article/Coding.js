import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Coding(props) {
    return (
        <div className="space-y-2" {...props}>
            <p className="text-black/50">{props.filename}</p>
            <div className="rounded-lg">
                <SyntaxHighlighter
                    language={props.language}
                    style={oneLight}
                    wrapLines
                    showLineNumbers
                    className={"shadow-sm"}
                >
                    {props.code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
