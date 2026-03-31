"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export default function DarkMode({ children }) {
    // Initialize state. You might want to check localStorage here later.
    const [isDark, setIsDark] = useState(true);

    const toggle = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ isDark, toggle }}>
            {/* The 'dark' class here is what Tailwind's 'selector' strategy looks for.
               Everything inside this div will now respect 'dark:' attributes.
            */}
            <div className={isDark ? "dark" : ""}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);