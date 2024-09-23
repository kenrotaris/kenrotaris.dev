import React, { useState, useEffect } from "react";

function App() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    fetch('/backend/date')
      .then((response) => response.json())
      .then((data) => setCurrentDate(data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Current Date from Backend: {currentDate}</p>
      </header>
    </div>
  );
}

export default App;