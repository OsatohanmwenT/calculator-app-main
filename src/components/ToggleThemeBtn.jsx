export default function ToggleThemeBtn({ handleChange, activeTheme }) {
    const ballPosition = {
        dark: '0px',
        theme2: '150%',
        theme3: '300%'
    };

    return(
        <div className="flex items-center justify-between p-1 relative gap-2 bg-bgToggle rounded-xl *:transition *:duration-500 *:ease-in-out">
              <button onClick={() => handleChange("dark")} className="before:content-['1'] toggle-btn"></button>
              <button onClick={() => handleChange("theme2")} className="before:content-['2'] toggle-btn"></button>
              <button onClick={() => handleChange("theme3")} className="before:content-['3'] toggle-btn"></button>
              <div className="absolute w-4 h-4 rounded-full bg-keyBgS hover:bg-orange transition-all"  style={{ transform: `translateX(${ballPosition[activeTheme]})` }}></div>
            </div>
    )
}