import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  const handleChange = (inputVal: string, idx: number) => {
    setCells((prevCells) =>
      prevCells.map((cell, i) => (i === idx ? inputVal : cell))
    );
  };

  const plusClick = (idx: number) => {
    const indexToInsert = idx + 1;
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells.splice(indexToInsert, 0, "_");
      return newCells;
    });
  };

  return (
    <div className="container">
      {cells.map((cell, idx) => {
        return (
          <div key={idx} className="inner">
            <input
              className="cell"
              onChange={(e) => handleChange(e.currentTarget.value, idx)}
              value={cell}
              type="text"
            />
            {idx < cells.length - 1 && (
              <span onClick={() => plusClick(idx)} className="plus"></span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
