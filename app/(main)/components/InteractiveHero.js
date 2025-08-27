"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "motion/react";
import { useTranslations } from 'next-intl';

import { useEffect, useRef } from "react";
import { Engine, Render, Mouse, MouseConstraint, World, Bodies, Body, Runner, Events } from "matter-js";

const EMOJIS = ["🥖", "🥥", "🇫🇷"];
const TOTAL = 15;
const SIZE = 150;

export default function InteractiveHero() {
    const sceneRef = useRef(null);
    const emojiRefs = useRef([]);

    useEffect(() => {
        const width = sceneRef.current.offsetWidth;
        const height = sceneRef.current.offsetHeight;

        const engine = Engine.create();

        engine.gravity.y = -1;

        const world = engine.world;

        // Create boundaries
        const thickness = 30;
        const ground = Bodies.rectangle(width / 2, height - thickness / 2, width, thickness, { isStatic: true });
        const ceiling = Bodies.rectangle(width / 2, -thickness / 2, width, thickness, { isStatic: true });
        const leftWall = Bodies.rectangle(-thickness / 2, height / 2, thickness, height, { isStatic: true });
        const rightWall = Bodies.rectangle(width + thickness / 2, height / 2, thickness, height, { isStatic: true });

        World.add(world, [ground, ceiling, leftWall, rightWall]);

        // Create emoji bodies
        const bodies = [];
        for (let i = 0; i < TOTAL; i++) {
            const x = Math.random() * (width - SIZE) + SIZE / 2;
            const y = Math.random() * (height / 2);
            bodies.push(Bodies.circle(x, y, SIZE / 2, {
                restitution: 0.8,
                friction: 0.1,
                density: 0.001,
            }));
        }
        World.add(world, bodies);

        var mouse = Mouse.create(sceneRef.current),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        World.add(world, mouseConstraint);

        // Sync DOM emoji positions with physics
        const update = () => {
            bodies.forEach((body, i) => {
                const ref = emojiRefs.current[i];
                if (ref) {
                    // Center the emoji on the physics body
                    ref.style.transform = `translate(${body.position.x - SIZE / 2}px, ${body.position.y - SIZE / 2}px) rotate(${body.angle}rad)`;
                }
            });
        };

        const runner = Runner.create();
        Runner.run(runner, engine);

        let frame;
        const animate = () => {
            update();
            frame = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(frame);
            Runner.stop(runner);
            World.clear(world, false);
            Engine.clear(engine);
        };
    }, []);

    return (
        <div
            ref={sceneRef}
            className="relative w-full h-[40rem] overflow-hidden bg-gradient-to-tr from-amber-100 to-orange-100"
            style={{ touchAction: "none" }}
        >
            {Array.from({ length: TOTAL }).map((_, i) => (
                <span
                    key={i}
                    ref={el => (emojiRefs.current[i] = el)}
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        fontSize: `${SIZE}px`,
                        pointerEvents: "none",
                        userSelect: "none",
                        willChange: "transform",
                    }}
                >
                    {EMOJIS[i % EMOJIS.length]}
                </span>
            ))}
        </div>
    );

    /*
    const lang = useTranslations("ui");

    return (
        <div className='h-[40rem] overflow-hidden'>
            <motion.div
                className="h-[40rem] bg-gradient-to-tr from-red-700 to-orange-200 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
                <p className="text-lg w-fit px-4 py-2 bg-white rounded-xl text-black">{lang("interactivePlaceholder")}</p>
            </motion.div>
        </div>
    );
    */
}

/*
<div className="h-[40rem] bg-amber-100">
            <DotLottieReact
                src="/animations/cabin.lottie"
                loop
                autoplay
                renderConfig={{ devicePixelRatio: 1, autoResize: true }}
            />
        </div>
*/