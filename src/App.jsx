import { useState } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Screen from "./components/Screen";
import ButtonContainer from "./components/ButtonContainer";
import buttonValues from "./utils/buttonValues";

export default function App() {
  const [theme, setTheme] = useState("1");
  const [calc, setCalc] = useState({
    sign: "",
    prevNum: 0,
    currentNum: 0,
    res: 0,
  });

  const onThemeChange = (val) => {
    setTheme(val.toString());
  };

  const onEqualsClick = () => {
    if (calc.sign && calc.currentNum && calc.prevNum) {
      let res;

      switch (calc.sign) {
        case "+":
          res = calc.prevNum + calc.currentNum;
          break;
        case "-":
          res = calc.prevNum - calc.currentNum;
          break;
        case "/":
          res =
            calc.prevNum === "0" && calc.sign === "/"
              ? `Can't divide by zero!`
              : calc.prevNum / calc.currentNum;
          break;
        case "x":
          res = calc.prevNum * calc.currentNum;
      }

      setCalc({
        ...calc,
        res: res,
        currentNum: 0,
        prevNum: res,
      });
    }
  };

  const onSignClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      prevNum:
        !calc.prevNum && calc.currentNum ? calc.currentNum : calc.prevNum,
      currentNum: 0,
    });
  };

  const onCommaClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      currentNum: !calc.currentNum.toString().includes(".")
        ? calc.currentNum + value
        : calc.currentNum,
    });
  };

  const onNumClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      currentNum:
        calc.currentNum === 0 && value === "0"
          ? "0"
          : Number(calc.currentNum + value),
      res: !calc.sign ? 0 : calc.res,
    });
  };

  const onResetClick = () => {
    setCalc({ sign: "", prevNum: 0, currentNum: 0, res: 0 });
  };

  const onDeleteClick = () => {
    setCalc({ ...calc, currentNum: 0 });
  };
  return (
    <div className="container" data-theme={theme}>
      <div className="calculator-container">
        <Header onThemeChange={onThemeChange} theme={theme} />
        <Calculator>
          <Screen
            value={
              calc.currentNum
                ? calc.currentNum
                : calc.prevNum
                ? calc.prevNum
                : calc.res
            }
          />
          <ButtonContainer
            buttonValues={buttonValues}
            onEqualsClick={onEqualsClick}
            onCommaClick={onCommaClick}
            onDeleteClick={onDeleteClick}
            onSignClick={onSignClick}
            onNumClick={onNumClick}
            onResetClick={onResetClick}
          />
        </Calculator>
      </div>
    </div>
  );
}
