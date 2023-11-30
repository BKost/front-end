import { Outlet } from "react-router-dom";
import "./App.css";

import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <header className="App">
      <Navigation />
      <Outlet />
      {/* <CategoryPage /> */}

      {/* <div
        style={{
          backgroundImage: "url(/images/background-image-shop.svg)",
        }}
        className="background-image"
      ></div> */}
    </header>
  );
}

export default App;
