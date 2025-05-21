export default function ArticleHeader({ year, month, title }) {
    return (
        <div className="flex flex-col items-center">
            <p className="uppercase">{month} {year}</p>
            <p className="text-2xl font-medium">{title}</p>
        </div>
    );
}
