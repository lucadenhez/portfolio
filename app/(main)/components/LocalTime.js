export default function LocalTime() {
    const currentHour = new Date().getHours();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    
    return (
        <div className="flex justify-center">
            {(currentHour >= 0 && currentHour < 7) || (currentHour >= 21 && currentHour <= 0) ? (
                <p className="bg-gradient-to-tr from-indigo-900 to-gray-900 text-white p-3 rounded-xl w-fit">It is currently {currentTime} in Seattle
                    <span className="pl-2">🌖</span>
                </p>
            ) : (
                <p className="bg-gradient-to-bl from-gray-400 to-gray-300 text-white p-3 rounded-xl w-fit">It is currently {currentTime} in Seattle
                    <span className="pl-2">🌧️</span>
                </p>
            )}
        </div>
    );
}
