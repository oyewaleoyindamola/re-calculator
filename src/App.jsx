import { useState } from "react";
import "./App.css";
import useInputs from "./UseInputs";
function App() {
  const [inputDatas, setInputDatas] = useState();
  const { setEventInputs } = useInputs(setInputDatas);
  const showInputs = (obj) => {
    let result = "";
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result += obj[key];
      }
    }
    return result;
  };
  return (
    <>
      <main>
        <div className="calculatorWrapper">
          <div className="screen">
            <p id="result">{showInputs(inputDatas)}</p>
          </div>
          <div className="buttons">
            <div className="div1">
              <button
                type="button"
                value=""
                className="green btn"
                id="clear"
                onClick={() => {
                  setInputDatas(0);
                }}
              >
                C
              </button>
              <button
                type="button"
                value="<"
                className="green btn"
                onClick={(e) => {
                  setEventInputs(e.target.value, "<");
                }}
              >
                &lt;
              </button>
              <button
                type="button"
                value="/"
                className="purple btn"
                onClick={(e) => {
                  setEventInputs(e.target.value, "slash");
                }}
              >
                /
              </button>
              <button
                type="button"
                value="*"
                className="purple btn"
                onClick={(e) => {
                  setEventInputs(e.target.value, "multiply");
                }}
              >
                X
              </button>
            </div>
            <div className="div1">
              <button
                className="btn"
                type="button"
                value="7"
                onClick={(e) => {
                  setEventInputs(e.target.value, "seven");
                }}
              >
                7
              </button>
              <button
                className="btn"
                type="button"
                value="8"
                onClick={(e) => {
                  setEventInputs(e.target.value, "eight");
                }}
              >
                8
              </button>
              <button
                className="btn"
                type="button"
                value="9"
                onClick={(e) => {
                  setEventInputs(e.target.value, "nine");
                }}
              >
                9
              </button>
              <button
                type="button"
                value="-"
                className="purple btn"
                onClick={(e) => {
                  setEventInputs(e.target.value, "minus");
                }}
              >
                -
              </button>
            </div>
            <div className="div1">
              <button
                className="btn"
                type="button"
                value="4"
                onClick={(e) => {
                  setEventInputs(e.target.value, "four");
                }}
              >
                4
              </button>
              <button
                className="btn"
                type="button"
                value="5"
                onClick={(e) => {
                  setEventInputs(e.target.value, "five");
                }}
              >
                5
              </button>
              <button
                className="btn"
                type="button"
                value="6"
                onClick={(e) => {
                  setEventInputs(e.target.value, "six");
                }}
              >
                6
              </button>
              <button
                className="btn purple"
                type="button"
                value="+"
                onClick={(e) => {
                  setEventInputs(e.target.value, "add");
                }}
              >
                +
              </button>
            </div>
            <div className="under">
              <div className="nums">
                <div className="one">
                  <button
                    className="btn"
                    type="button"
                    value="1"
                    onClick={(e) => {
                      setEventInputs(e.target.value, "one");
                    }}
                  >
                    1
                  </button>
                  <button
                    className="btn"
                    type="button"
                    value="2"
                    onClick={(e) => {
                      setEventInputs(e.target.value, "two");
                    }}
                  >
                    2
                  </button>
                  <button
                    className="btn"
                    type="button"
                    value="3"
                    onClick={(e) => {
                      setEventInputs(e.target.value, "three");
                    }}
                  >
                    3
                  </button>
                </div>
                <div className="two">
                  <button
                    className="btn"
                    type="button"
                    value="0"
                    onClick={(e) => {
                      setEventInputs(e.target.value, "zero");
                    }}
                  >
                    0
                  </button>
                  <button
                    className="btn"
                    type="button"
                    value="."
                    onClick={(e) => {
                      setEventInputs(e.target.value, "dot");
                    }}
                  >
                    .
                  </button>
                </div>
              </div>
              <div className="equal">
                <button
                  type="button"
                  id="equal"
                  value="="
                  onClick={() => {
                    // setEventInputs(eval(setInputDatas));
                  }}
                  className="green"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
