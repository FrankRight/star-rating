import "./App.css";
import StarComponent from "./components/starComponent";

function App() {
  return (
    <>
      <h1>Recipe App Rating Component</h1>

      <StarComponent
        totalStars={10}
        style={{ backgroundColor: "white" }}
        onDoubleClick={() => alert("double click")}
      />
    </>
  );
}

export default App;
