import './App.css';
import { useState } from "react";

const planets = [
  {name: "Mercury", isGasPlanet: false},
  {name: "Venus", isGasPlanet: false},
  {name: "Earth", isGasPlanet: false},
  {name: "Mars", isGasPlanet: false},
  {name: "Jupiter", isGasPlanet: true},
  {name: "Saturn", isGasPlanet: true},
  {name: "Uranus", isGasPlanet: true},]


//useStates



function App() {

  const [age, setAge] = useState(0)

const increase = () => {
  setAge(age + 1)
};

  return (
    <div className="App">
        
    {planets.map((pl, key) => {
      key = {key}
      if(pl.isGasPlanet) return <h1>{pl.name}</h1>

    })}

    <h2>Age: {age} <button onClick={increase}> Increase </button> </h2>

</div>
  );
  
}



export default App;
