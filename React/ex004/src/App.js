import './App.css';
import Axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

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

const [exc, setExcuse] = useState(null)
const [predictedAge, setPredictedAge] = useState(null)
const [name, setName] = useState("")
const fetchData = () => {
  Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
    setPredictedAge(res.data)
    console.log(res.data)
  })
}

const excuser = (selected) => {

  console.log(selected)
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${selected}`).then((res) => {
    setExcuse(res.data[0])
    console.log(res.data)
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

    <div>
      <br></br>
      <h1>Excuse generator:</h1>
      <button id='btn' onClick={() => excuser('party')}>Party</button>
      <button id='btn' onClick={() => excuser('family')}>Family</button>
      <button id='btn' onClick={() => excuser('office')}>Office</button>

      <br></br>

      <p> {exc?.excuse} </p>
    </div>

    </div>
  );
}

export default App;