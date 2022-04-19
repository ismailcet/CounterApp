import "./App.css";
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import DecreaseByTwoCounter from "./components/DecreaseByTwoCounter";
import ResetCounter from "./components/ResetCounter";

function App() {
  return (
    <div className="app">
      <Counter></Counter>
      <div className="btns">
        <DecreaseByTwoCounter></DecreaseByTwoCounter>
        <DecreaseCounter></DecreaseCounter>
        <ResetCounter></ResetCounter>
        <IncreaseCounter></IncreaseCounter>
        <IncreaseByTwoCounter></IncreaseByTwoCounter>
      </div>
    </div>
  );
}

export default App;
