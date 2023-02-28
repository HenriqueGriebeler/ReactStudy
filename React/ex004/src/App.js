import './App.css';
import Axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

function App() {



const [catFact, setCatFact] = useState(""); 

const fetchCatFact = () => {
  Axios.get("https://catfact.ninja/fact").then((res) => {
  setCatFact(res.data.fact)
})
}
useEffect(() => {
  fetchCatFact()
}, [])

  return (
    <div className="App">
        <div>
          <button onClick={fetchCatFact}> Generate cat Fact </button>
          <p> {catFact} </p>
        </div>
    </div>
  );
}

export default App;