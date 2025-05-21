export default function Paragraph({ title, content, color = "#dbeafe" }) {
    return (
        <div className="w-2/3">
            <p
            className="font-medium text-xl px-3 py-1 mb-5 w-fit rounded-full"
            style={{backgroundColor: color}}
            >{title}</p>
            <p className="pl-2 text-lg">{content}</p>
        </div>
    );
}
