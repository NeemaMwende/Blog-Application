// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        console.log("Here is the response:", response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error thrown", err);
      });
  }, []);

  return (
    <div className="App">
      <p>This is the data from the API:</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
