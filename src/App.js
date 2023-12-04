import { Outlet } from "react-router-dom";
import "./App.css";

import Navigation from "./Components/Navigation/Navigation";
import LogOutModal from "./Components/LogOutModal/LogOutModal";

function App() {
  return (
    <main className="App">
      <Navigation />
      <Outlet />
      {/* <LogOutModal /> */}
    </main>
  );
}

export default App;
