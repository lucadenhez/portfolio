export default function ArticleHeader({ year, month, title }) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-5xl tracking-tighter font-medium">{title}</p>
            <p className="uppercase text-white/80">{month} {year}</p>
        </div>
    );
}
