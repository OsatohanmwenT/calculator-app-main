import { useState } from "react"
import Header from "./components/Header"
import ScreenDisplay from "./components/ScreenDisplay"
import Buttons from "./components/Buttons"
import useKeyboardControls from "./hooks/useKeyboardControls"
import useThemeSwitch from "./hooks/useThemeSwitch"

export default function App() {
  const [currentDisplay, setCurrentDisplay] =useState("0")
  const [prevDisplay, setPrevDisplay] = useState("")
  const [operator, setOperator] = useState('')
  const {theme, handleChange, activeTheme} = useThemeSwitch()

  function appendNumber(num) {
    setCurrentDisplay((prevNum) => (prevNum === '0'? num : prevNum + num))
  }

  function resetBtn() {
    setCurrentDisplay("0")
    setPrevDisplay("")
  }

  function deleteNumber() {
    setCurrentDisplay(prevNum => prevNum.length > 1 ? prevNum.slice(0, -1) : "0")
  }

  const setOperation = (op) => {
    if (currentDisplay === '') return;
    if (prevDisplay && operator) {
      calculateResult(false);
    } else {
      setPrevDisplay(currentDisplay);
    }
    setOperator(op);
    setCurrentDisplay("0")
  };


  function calculateResult(finalize = true) {
    if(currentDisplay === "" || prevDisplay === "" || operator === "") return;
    let result;
    const prev = parseFloat(prevDisplay);
    const curr = parseFloat(currentDisplay);
    switch (operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '/':
        result = prev / curr;
        break;
      default:
        return;
    }
    setCurrentDisplay(result.toString());
    setPrevDisplay(finalize ? "" : result.toString());
    setOperator(finalize ? "" : operator);
  }

  useKeyboardControls(appendNumber, deleteNumber, resetBtn, setOperation, calculateResult);


  return (
    <div className="flex items-center justify-center h-screen bg-bgMain *:transition *:duration-1000 *:ease-in-out">
      <main className="w-[550px] max-sm:w-96 px-4">
        <Header handleChange={handleChange} activeTheme={activeTheme} />
        <ScreenDisplay currentDisplay={currentDisplay} prevDisplay={prevDisplay} operator={operator} theme={theme} />
        <Buttons appendNumber={appendNumber} resetBtn={resetBtn} deleteNumber={deleteNumber} setOperation={setOperation} calculateResult={calculateResult} theme={theme} />
      </main>
    </div>
  )
}