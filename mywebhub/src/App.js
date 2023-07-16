import "./App.css";
import AppHeader from "./Components/AppHeader";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="">
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default App;
