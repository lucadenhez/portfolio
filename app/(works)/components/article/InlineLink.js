"use client";

import Link from "next/link";
import { motion } from "motion/react";


export default function InlineLink({ label, url }) {
    return (
        <Link href={url} target="_blank">
            <motion.div
                className="flex items-center gap-1"
                whileHover={{ opacity: 0.25, cursor: "pointer" }}
            >
                <p className="text-blue-500 dark:text-blue-400 font-medium">{label}</p>
                <svg className="w-4 h-4 rotate-[-45deg] opacity-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </motion.div>
        </Link>
    );
}
