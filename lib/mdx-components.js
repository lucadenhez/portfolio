import Image from "next/image";
import ArticleHeader from "@/app/(main)/components/article/ArticleHeader";
import ProjectInfo from "@/app/(main)/components/article/ProjectInfo";
import Paragraph from "@/app/(main)/components/article/Paragraph";
import Checklist from "@/app/(main)/components/article/Checklist";
import Keywords from "@/app/(main)/components/article/Keywords";
import ArticleImage from "@/app/(main)/components/article/ArticleImage";
import CandidImage from "@/app/(main)/components/article/CandidImage";
import CandidGallery from "@/app/(main)/components/article/CandidGallery";
import ViewButton from "@/app/(main)/components/article/ViewButton";
import ReturnButton from "@/app/(main)/components/article/ReturnButton";
import ParallaxImage from "@/app/(main)/components/ParallaxImage";

function MdxImage({ src, alt = "", ...props }) {
    const width = Number(props.width ?? 1400);
    const height = Number(props.height ?? 900);
    const className = props.className ?? "";

    return (
        <span className="flex flex-col items-center my-10 gap-5">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`w-full h-auto rounded-2xl ${className}`.trim()}
                loading="eager"
                placeholder={`data:image/${"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNc/x8AAmMBsFXIDN0AAAAASUVORK5CYII="}`}
            />
            <span className="text-sm text-center">{alt}</span>
        </span>
    );
}

function getAnchor(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/[ ]/g, '-');
}

export const mdxComponents = {
    h1: ({ children }, ...props) => {
        const anchor = getAnchor(children);

        return (
            <h1 id={anchor} className="scroll-m-30 text-3xl md:text-4xl tracking-tight font-medium mt-15 mb-4" {...props}>{children}</h1>
        );
    },
    h2: (props) => <h2 className="text-2xl tracking-tight font-medium mt-15 mb-3" {...props} />,
    h3: (props) => <h3 className="text-xl tracking-tight font-medium mt-15 mb-3" {...props} />,
    p: (props) => <p className="font-normal leading-relaxed my-4" {...props} />,
    ul: (props) => <ul className="list-disc pl-7 space-y-2 my-5 font-thin" {...props} />,
    ol: (props) => <ol className="list-decimal pl-7 space-y-2 my-5 font-thin" {...props} />,
    blockquote: (props) => <blockquote className="my-6 border-l-4 border-black/20 pl-4 italic" {...props} />,
    a: (props) => <a className="underline underline-offset-4 hover:opacity-70 transition-opacity" {...props} />,
    hr: (props) => <hr className="my-10 border-black/10" {...props} />,
    img: MdxImage,
    ArticleHeader,
    ProjectInfo,
    Paragraph,
    Checklist,
    Keywords,
    ArticleImage,
    CandidImage,
    CandidGallery,
    ViewButton,
    ReturnButton,
    ParallaxImage,
};
