import ToggleThemeBtn from "./ToggleThemeBtn"

export default function Header({ handleChange, activeTheme }) {
    return(
        <header className="flex justify-between items-baseline *:transition *:duration-500 *:ease-in-out">
          <h1 className="text-header text-3xl font-bold">calc</h1>
          <div className="flex justify-between items-center gap-2">
            <p className="text-header text-sm font-bold">THEME</p>
            <ToggleThemeBtn handleChange={handleChange} activeTheme={activeTheme} />
          </div>
        </header>
    )
}