import Link from "next/link";

export default function Contact() {
    return (
        <div className="sm:mx-30 mx-10 my-10">
            <p className="font-medium tracking-tighter text-3xl sm:text-5xl">Contact</p>
            <div className="pt-3 sm:text-xl text-md">
                <Link className="underline" href={"mailto:lucadenhez@icloud.com"}>lucadenhez@icloud.com</Link>
                <p>+12067397225</p>
            </div>

            <div className="h-40" />
        </div>
    );
}
