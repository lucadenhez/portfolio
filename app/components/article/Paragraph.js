export default function Paragraph({ title, color = "#dbeafe", children }) {
    return (
        <div className="sm:w-2/3 w-full">
            {title ? (
                <p
                    className="font-medium text-xl px-3 py-1 mb-5 w-fit rounded-full"
                    style={{ backgroundColor: color }}
                >{title}</p>
            ) : (null)}

            <div className="pl-2 text-lg whitespace-pre-line flex gap-2">{children}</div>
        </div>
    );
}
