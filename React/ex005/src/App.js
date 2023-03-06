import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Contact} from './contact.js'
import {Profile} from './profile.js'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"

function App() {

  const[username, setUsername] = useState("Henrique")

  const Home = () => {
    return <div>
      página inicial Eita bixo 
    </div>

  }


  return (
    <div className="App">
      <Router>
        
       {/*  <link to="./contact.js">Contact</link>*/}
        <Routes>

          <Route path="/" element={<Home username={username} setUsername={setUsername}/>} />
          <Route path='/contact' element={<Contact username={username} setUsername={setUsername}/>} />
          <Route path='/profile' element={<Profile username={username} setUsername={setUsername}/>} />
          <Route path='*' element={<h1>Página não encontrada!</h1>} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
