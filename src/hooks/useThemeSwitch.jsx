import { useState, useEffect } from "react";

export default function useThemeSwitch() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [activeTheme, setActiveTheme] = useState(("dark"))

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleChange = (newTheme) => {
        setTheme(newTheme);
        setActiveTheme(newTheme)
    };

    return { theme, handleChange, activeTheme };
}
