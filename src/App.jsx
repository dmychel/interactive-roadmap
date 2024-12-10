import { useState } from "react";
import "/src/App.css";

function App() {
  const arr = [
    "Newsletter",
    1,
    2,
    3,
    "SEO",
    1,
    2,
    3,
    "Backups",
    1,
    2,
    3,
    "Premium",
    1,
    2,
    3,
  ];
  return (
    <div className="app">
      <h1>hello world</h1>
      <div className="grid">
        {/* Header Progress */}
        <span> </span>
        <div className="table_heading">Backlog</div>
        <div className="table_heading">In Developevment</div>
        <div className="table_heading">Completed</div>

        {arr.map((tile, index) => {
          // console.log(tile);
          // console.log(index);
          if (index % 4 === 0) {
            console.log(index);
            return (
              <div className="tile" key={index}>
                {tile}
              </div>
            );
          } else {
            return <div key={index}></div>;
          }
        })}
      </div>
    </div>
  );
}

export default App;
