import Image from "next/image";


export default function ArticleImage({ image, subtitle = "" }) {
    return (
        <div className="w-full h-full overflow-hidden relative rounded-xl flex flex-col items-center">
            <Image src={image}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ width: "100%", height: "auto"}}
                alt="Image in article"
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
            <p className="text-sm">{subtitle}</p>
        </div>
    );
}
