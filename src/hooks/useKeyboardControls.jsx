import { useEffect } from "react";

function useKeyboardControls(
  appendNumber,
  deleteNumber,
  resetBtn,
  setOperation,
  calculateResult
) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (/\d/.test(key)) {
        appendNumber(key);
      } else if (key === "Backspace") {
        deleteNumber();
      } else if (key === "Escape") {
        resetBtn();
      } else if (["+", "-", "*", "/"].includes(key)) {
        setOperation(key);
      } else if (key === "Enter" || key === "=") {
        calculateResult();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [appendNumber, deleteNumber, resetBtn, setOperation, calculateResult]);
}

export default useKeyboardControls;
