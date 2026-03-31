import Link from "next/link";

export default function Contact() {
    return (
        <div className="m-5">
            <p className="font-medium tracking-tighter text-3xl">Contact</p>
            <div className="pt-3">
                <Link className="underline" href={"mailto:lucadenhez@icloud.com"}>lucadenhez@icloud.com</Link>
                <p>+12067397225</p>
            </div>

            <div className="h-[5rem]" />
        </div>
    );
}
