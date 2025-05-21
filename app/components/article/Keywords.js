export default function Keywords({ keywords }) {
    return (
        <div className="flex sm:flex-row flex-col justify-baseline items-center gap-2">
            {keywords.map((keyword, index) => (
                <div className="px-10 py-10 w-fit text-white font-semibold bg-sky-800 rounded-md" key={index}>
                    <p>{keyword}</p>
                </div>
            ))}
        </div>
    );
}
