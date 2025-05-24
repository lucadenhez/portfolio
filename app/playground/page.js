import ReturnButton from "../(main)/components/article/ReturnButton";
import PageAnimation from "../(main)/components/PageAnimation";

export default function Playground() {
    return (
        <PageAnimation title="Fun projects are waiting">
            <div className="flex flex-col justify-center items-center h-screen bg-[#f0542e] gap-5">
                <p className="text-lg text-white">Come back soon! Fun projects (will be) waiting...</p>
                <div className="invert">
                    <ReturnButton />
                </div>
            </div>
        </PageAnimation>
    );
}
