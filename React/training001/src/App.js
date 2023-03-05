import './App.css';
import { useState } from 'react'
function App() {

{/* VER AGORA ONDE DEVO APLICAR O USESTATE
Muito cuidado para não errar isso logo no
início */}

const Select = () => {
  return <div>
  <h1 style={{color: Text}}>Selecione a cor</h1>
  </div>
}

const [Text, setTextColor] = useState('black')

const changeColor = (color) => { 
  setTextColor(color)
}

const [addText, setAddText] = useState('')

const handleChange = (event) => {

 setAddText(event.target.value)

}

const [submitedArr, setArr] = useState([])

const submit = () => {

setArr(addText) //DEVO ADICIONAR UM .MAP para colcar tudo dentro do array e funcionar
  console.log(submitedArr)
}

  return (
    <div className="App">
      
      <Select />
    <div>
      <h2 style={{color:'red'}} onClick={() => changeColor('red')}>Red</h2>
        <h2 style={{color:'blue'}} onClick={() => changeColor('blue')}>Blue</h2>
        <h2 style={{color:'green'}} onClick={() => changeColor('green')}>Green</h2>
        <h2 style={{color:'purple'}} onClick={() => changeColor('purple')}>Purple</h2>
        <h2 style={{color:'pink'}} onClick={() => changeColor('pink')}>Pink</h2>

        </div>
        <div>

        <h1>Adicionar abaixo:</h1>

        Digite o texto: <input onChange={handleChange}></input>
          
        <p>{addText} </p>
        
           <p><button onClick={submit}> Submit </button></p>
           <p>{submitedArr}</p>
        </div>
      </div>
    
  );
}

export default App;
