import './App.css';
import Axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

// https://excuser-three.vercel.app/v1/excuse/party/
// https://excuser-three.vercel.app/v1/excuse/family/
// https://excuser-three.vercel.app/v1/excuse/office/

const [catFact, setCatFact] = useState(""); 

const fetchCatFact = () => {
  Axios.get("https://catfact.ninja/fact").then((res) => {
  setCatFact(res.data.fact)
})
}
useEffect(() => {
  fetchCatFact()
}, [])


const [predictedAge, setPredictedAge] = useState(null)
const [name, setName] = useState("")
const fetchData = () => {
  Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
    console.log(res.data)
    setPredictedAge(res.data)
  })
}

  return (
    <div className="App">
        <div>
          <button onClick={fetchCatFact}> Generate cat Fact </button>
          <p> {catFact} </p>
        </div>
        <div>
          <input placeholder='Ex, Pedro' onChange={(event) => {setName=setName(event.target.value)}}/>
          <button onClick={fetchData}> Predict Age </button>

          <h1> Name: {predictedAge?.name} </h1>
          <h1> Predicted Age: {predictedAge?.age} </h1>
          <h1> Count: {predictedAge?.count} </h1>
        </div>
    </div>
  );
}

export default App;