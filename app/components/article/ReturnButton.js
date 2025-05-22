import Link from "next/link";

export default function ReturnButton() {
    return (
        <Link
            className="inline-flex items-center transition-all duration-300 ease-in-out hover:opacity-50"
            href="/ui#works"
        >
            <div className="flex items-center gap-2">
                <svg className="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
                <p>Back to all works</p>
            </div>
        </Link>
    );
}
