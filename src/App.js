import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  const labels = ["First", "Second", "Third"];

  return (
    <div className="App">
      {labels.map((label) => {
        return <MyComponent label={label} key={label} />;
      })}
    </div>
  );
}

export default App;
