export default function Keywords({ keywords }) {
    return (
        <div className="flex sm:flex-row flex-col items-center gap-2">
            {keywords.map((keyword, index) => (
                <div className="px-10 py-10 sm:w-fit w-full text-white font-medium bg-sky-800 rounded-md text-center" key={index}>
                    <p>{keyword}</p>
                </div>
            ))}
        </div>
    );
}
