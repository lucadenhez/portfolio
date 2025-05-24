import Image from "next/image";


export default function ArticleImage({ image }) {
    return (
        <div className="w-full h-full overflow-hidden relative">
            <Image src={image}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ width: "100%", height: "auto"}}
                alt="Image in article"
            />
        </div>
    );
}
