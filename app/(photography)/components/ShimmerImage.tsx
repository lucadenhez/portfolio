"use client";

import { useState } from "react";
import Image from "next/image";

export default function ShimmerImage({ photo }: { photo: any }) {
    const [isLoading, setLoading] = useState(true);

    return (
        <div
            className={`relative w-full h-full overflow-hidden bg-gray-200 
                        ${isLoading ? "shimmer-wrapper" : "shimmer-hidden"}`}
        >
            <Image
                src={photo.src}
                alt="Photo in Portfolio"
                width={photo.width}
                height={photo.height}
                className={`
                    duration-700 ease-in-out
                    ${isLoading ? "scale-105 blur-lg opacity-50" : "scale-100 blur-0 opacity-100"}
                `}
                onLoad={() => setLoading(false)}
            />
        </div>
    );
}
