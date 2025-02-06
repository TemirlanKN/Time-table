import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="App">
      <h1>01.19.2023 - 01.25.2023 Week schedule</h1>
      <h2>
        <span role="img" aria-label="calendar">
          📅
        </span>{" "}
      </h2>
      <Calendar />
    </div>
  );
};

export default App;
