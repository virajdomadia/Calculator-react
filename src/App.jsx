import styles from "./App.module.css";

import Display from "./components/display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText == "DE") {
      if (calVal == "") {
      }
      const value = calVal.slice(0, -1);

      setCalVal(value);
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(String(result));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <center className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </center>
  );
}

export default App;
