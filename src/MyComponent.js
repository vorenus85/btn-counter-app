import { useState } from "react";

function MyComponent({ label }) {
  const [counter, setCounter] = useState(0);

  function handleCouter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      {counter} - <button onClick={handleCouter}>{label}</button>
    </div>
  );
}

export default MyComponent;
