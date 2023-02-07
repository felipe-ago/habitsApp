import "./styles/global.css";
import { Habit } from "./components/Habit";

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={28} />
      <Habit completed={30} />
      <Habit completed={40} />
      <Habit completed={50} />
    </div>
  );
}

export default App;
