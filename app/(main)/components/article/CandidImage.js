import Image from "next/image";


export default function CandidImage({ image }) {
    return (
        <div className="w-full h-full overflow-hidden relative rounded-[1.75rem] border-15 outline-zinc-200 outline-3 border-white">
            <Image src={image}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ width: "100%", height: "auto", borderRadius: "0.75rem" }}
                alt="Image in article"
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
        </div>
    );
}
