// Main app component with routing
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";

function App() {
  useEffect(() => {
    fetch('/backend/date')
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        response.text().then(text => console.log(text));
      })
      .catch(error => console.error("There was an error!", error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
