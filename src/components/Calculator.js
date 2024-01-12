import React, { useState } from "react";
import SimpleNavbar from "./SimpleNavbar";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [displayValue, setDisplayValue] = useState("0");

  const updateDisplay = () => {
    setDisplayValue(input || "0");
  };

  const clearDisplay = () => {
    setInput("");
    updateDisplay();
  };

  const appendToInput = (value) => {
    setInput((prevInput) => prevInput + value);
    updateDisplay();
  };

  const calculate = () => {
    try {
      const result = evaluateExpression(input);
      setDisplayValue(result.toString());
      setInput(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const evaluateExpression = (expression) => {
    const tokens = expression.match(/[+\-*/]|\d+\.\d+|\d+/g) || [];

    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);

      if (operator === "+") {
        result += operand;
      } else if (operator === "-") {
        result -= operand;
      } else if (operator === "*") {
        result *= operand;
      } else if (operator === "/") {
        result /= operand;
      }
    }

    return result;
  };

  const buttonStyle = {
    padding: "15px",
    fontSize: "18px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      <section>
        <div className="Navbar">{<SimpleNavbar />}</div>
      </section>
      <div
        style={{
          width: "300px",
          backgroundColor: "#f2f2f2",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            textAlign: "right",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          id="display"
        >
          {displayValue}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: "10px",
          }}
          className="buttons"
        >
          <button style={buttonStyle} onClick={clearDisplay}>
            C
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("7")}>
            7
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("8")}>
            8
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("9")}>
            9
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("/")}>
            /
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("4")}>
            4
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("5")}>
            5
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("6")}>
            6
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("*")}>
            *
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("1")}>
            1
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("2")}>
            2
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("3")}>
            3
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("-")}>
            -
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("0")}>
            0
          </button>
          <button style={buttonStyle} onClick={() => appendToInput(".")}>
            .
          </button>
          <button style={buttonStyle} onClick={calculate}>
            =
          </button>
          <button style={buttonStyle} onClick={() => appendToInput("+")}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
