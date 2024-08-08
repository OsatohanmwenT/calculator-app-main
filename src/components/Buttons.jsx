export default function Buttons({ appendNumber, resetBtn, deleteNumber, setOperation, calculateResult }) {
    return(
        <div className="w-full mt-4 p-5 grid grid-cols-4 grid-rows-5 gap-5 max-sm:gap-3 bg-bgToggle rounded-lg *:transition *:duration-500 *:ease-in-out">
          <button className="normal-btn" onClick={() => appendNumber("7")}>7</button>
          <button className="normal-btn" onClick={() => appendNumber("8")}>8</button>
          <button className="normal-btn" onClick={() => appendNumber("9")}>9</button>
          <button className="p-2 rounded-lg font-bold bg-keyBg text-[32px] max-sm:text-2xl text-white" onClick={deleteNumber}>DEL</button>
          <button className="normal-btn" onClick={() => appendNumber("4")}>4</button>
          <button className="normal-btn" onClick={() => appendNumber("5")}>5</button>
          <button className="normal-btn" onClick={() => appendNumber("6")}>6</button>
          <button className="normal-btn" onClick={() => setOperation("+")}>+</button>
          <button className="normal-btn" onClick={() => appendNumber("1")}>1</button>
          <button className="normal-btn" onClick={() => appendNumber("2")}>2</button>
          <button className="normal-btn" onClick={() => appendNumber("3")}>3</button>
          <button className="normal-btn" onClick={() => setOperation("-")}>-</button>
          <button className="normal-btn" onClick={() => appendNumber(".")}>.</button>
          <button className="normal-btn" onClick={() => appendNumber("0")}>0</button>
          <button className="normal-btn" onClick={() => setOperation("/")}>/</button>
          <button className="normal-btn" onClick={() => setOperation("*")}>x</button>
          <button className="p-2 rounded-lg bg-keyBg text-white grid-flow-row font-bold text-[32px] max-sm:text-2xl col-span-2" onClick={resetBtn}>RESET</button>
          <button className="bg-keyBgS rounded-lg p-2 font-bold text-[32px] max-sm:text-2xl text-textSecondary col-span-2" onClick={calculateResult}>=</button>
        </div>
    )
}