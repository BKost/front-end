import "./App.css";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <div
        style={{
          backgroundImage: "url(/images/background-image-shop.svg)",
        }}
        className="background-image"
      ></div>
    </div>
  );
}

export default App;
