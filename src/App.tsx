import { useState, useEffect, useCallback } from "react";

import { Info, Calculator } from "./styles";
import Buttons from "./components/Buttons";

function App() {
  const [selectNumber, setSelectNumber] = useState<string>("");
  const [result, setResult] = useState<number | string>("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectedNumber = (value: string) => {
    if (value === "ENTER") {
      calculateResult();
    } else if (value === "+") {
      setSelectNumber((prevValue) => prevValue + value);
    } else if (value === "-") {
      setSelectNumber((prevValue) => prevValue + value);
    } else if (value === "*") {
      setSelectNumber((prevValue) => prevValue + value);
    } else if (value === "/") {
      setSelectNumber((prevValue) => prevValue + value);
    } else if (value === "%") {
      const percentage = (parseFloat(selectNumber) / 100).toString();
      setSelectNumber(percentage);
    } else if (value === "+/-") {
      if (selectNumber.startsWith("-")) {
        setSelectNumber(selectNumber.slice(1));
      } else {
        setSelectNumber(`-${selectNumber}`);
      }
    } else {
      setSelectNumber((prevValue) => prevValue + value);
    }
  };

  const clearCalculator = useCallback(() => {
    setSelectNumber("");
    setResult("");
  }, []);

  const calculateResult = () => {
    setResult(eval(selectNumber));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (!isNaN(Number(key))) {
        selectedNumber(key);
      } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        selectedNumber(key);
      } else if (key === "Enter") {
        selectedNumber("ENTER");
      } else if (key === "Escape") {
        clearCalculator();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedNumber, clearCalculator]);

  return (
    <>
      <Calculator>
        <Info>{result !== "" ? result : selectNumber}</Info>
        <Buttons
          selectedNumber={selectedNumber}
          // clearCalculator={clearCalculator}
        />
      </Calculator>
    </>
  );
}

export default App;
