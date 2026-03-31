export default function ArticleHeader({ year, month, title }) {
    return (
        <div className="flex flex-col">
            <p className="text-5xl tracking-tighter font-medium">{title}</p>
            <p className="uppercase text-black/50">{month} {year}</p>
        </div>
    );
}
