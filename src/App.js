import { Outlet } from "react-router-dom";
import "./App.css";

import Navigation from "./Components/Navigation/Navigation";
import LogOutModal from "./Components/LogOutModal/LogOutModal";
import { useUserContext } from "./context/UserContext";

function App() {
  const { showLogout, setShowLogout } = useUserContext();

  return (
    <main className="App">
      <Navigation />
      <Outlet />
      {showLogout && <LogOutModal />}
    </main>
  );
}

export default App;
