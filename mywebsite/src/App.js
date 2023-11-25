import "./App.css";
import AppHeader from "./Components/AppHeader";
import { Outlet } from "react-router";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="">
      <Provider></Provider>
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default App;
