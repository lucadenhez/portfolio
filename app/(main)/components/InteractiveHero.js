"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function InteractiveHero() {
    return (
        <div className="h-[40rem] bg-amber-100">
            <DotLottieReact
                src="/animations/cabin.lottie"
                loop
                autoplay
                renderConfig={{ devicePixelRatio: 1, autoResize: true }}
            />
        </div>
    );
}