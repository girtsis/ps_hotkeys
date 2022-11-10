import './App.css';
import React, {useEffect, useState} from "react"

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api").then(response => response.json());
      console.log(response);
    }

    fetchData();
  }, [])
  return (
    <div>
      <p>hi</p>
    </div>
  );
}

export default App;
