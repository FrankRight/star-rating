import "./App.css";
import StarComponent from "./components/starComponent";

function App() {
  return (
    <>
      <h1>Recipe App</h1>

      <StarComponent totalStars={5} />
    </>
  );
}

export default App;
