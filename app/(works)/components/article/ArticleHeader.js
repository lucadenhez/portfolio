import ScrollText from "../animations/ScrollText";

export default function ArticleHeader({ year, month, title }) {
    return (
        <div className="flex flex-col gap-2">
            <ScrollText className="text-5xl tracking-tighter font-medium" delay={2} >{title}</ScrollText>
            <ScrollText className="uppercase text-white/80" delay={2.3}>{month} {year}</ScrollText>
        </div>
    );
}
