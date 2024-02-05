import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
