import { useState } from 'react'
import './App.css'
import axios from "axios";

const API_URL = "https://dummyjson.com/todos"

function App() {
  const [data, setData] = useState()

  const callAPI = async () => {
    const { data: apiData } = await axios.get(API_URL);
    console.log(apiData);
    setData(apiData);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          callAPI();
        }}>
          Call API
        </button>
        <p>
          {
            data ? JSON.stringify(data) : "No data"
          }
        </p>
      </div>
    </>
  )
}

export default App
