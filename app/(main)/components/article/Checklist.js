import Image from "next/image";


export default function Checklist({ items }) {
    return (
        <div className="flex sm:flex-row flex-col justify-between gap-20">
            <div className="space-y-1">
                <p className="uppercase text-black/50 font-medium pb-3">Include</p>
                {items.positive.map((item, index) => (
                    <div key={index} className="w-fit px-2 py-1 bg-gradient-to-r from-green-500/30 to-white rounded-md">
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <div className="space-y-1">
                <p className="uppercase text-black/50 font-medium pb-3">Leave Out</p>
                {items.negative.map((item, index) => (
                    <div key={index} className="w-fit px-2 py-1 bg-gradient-to-r from-red-500/30 to-white rounded-md ">
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
