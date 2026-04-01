import Link from "next/link";

export default function Contact() {
    return (
        <div className="sm:mx-30 mx-10 my-20">
            <p className="tracking-tight text-3xl sm:text-5xl">Contact</p>
            <div className="pt-10 sm:text-xl text-md">
                <Link href={"mailto:lucadenhez@icloud.com"}>lucadenhez@icloud.com</Link>
                <p>+1 206 739 7225</p>
            </div>

            <div className="h-40" />
        </div>
    );
}
