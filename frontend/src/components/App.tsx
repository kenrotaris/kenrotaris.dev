import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    fetch('/backend/date')
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response.text());
      })
      .catch(error => console.error("There was an error!", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to my page!</p>
      </header>
    </div>
  );
}

export default App;
