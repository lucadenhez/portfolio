export default function ArticleHeader({ year, title }) {
    return (
        <div className="flex flex-col items-center">
            <p>{year}</p>
            <p className="text-2xl font-medium">{title}</p>
        </div>
    );
}
