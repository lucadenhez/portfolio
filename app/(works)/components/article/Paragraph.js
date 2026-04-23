export default function Paragraph({ title, color = "oklch(0.951 0.026 236.824)", children }) {
    return (
        <div className="sm:w-2/3 w-full">
            {title ? (
                <p
                    className="font-medium text-xl px-3 pb-2 pt-3 mb-5 w-fit rounded-full text-black leading-none"
                    style={{ backgroundColor: color }}
                >{title}</p>
            ) : (null)}
            <div className="pl-2 text-lg whitespace-pre-line flex gap-2">{children}</div>
        </div>
    );
}
