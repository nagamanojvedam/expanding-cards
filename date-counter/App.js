import { useState } from "react";
import "./App.css";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const offSet = count * step;
  const date = new Date();

  date.setDate(date.getDate() + offSet);

  function increaseCount() {
    setCount((currCount) => currCount + 1);
  }
  function decreaseCount() {
    setCount((currCount) => currCount - 1);
  }
  function increaseStep() {
    setStep((currStep) => currStep + 1);
  }

  function decreaseStep() {
    setStep((currStep) => currStep - 1);
  }

  return (
    <div className="container">
      <div className="select-container">
        <button className="btn" onClick={decreaseStep}>
          -
        </button>
        <p>{`Step: ${step}`}</p>
        <button className="btn" onClick={increaseStep}>
          +
        </button>
      </div>
      <div className="select-container">
        <button className="btn" onClick={decreaseCount}>
          -
        </button>
        <p>{`Count: ${count}`}</p>
        <button className="btn" onClick={increaseCount}>
          +
        </button>
      </div>
      <div className="text-box">{`${
        offSet ? `${offSet} days from today is` : `Today is`
      } ${weekday[date.getDay()]} ${
        month[date.getMonth()]
      } ${date.getDate()} ${date.getFullYear()}`}</div>
    </div>
  );
}
