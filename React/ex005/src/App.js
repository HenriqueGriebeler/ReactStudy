import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Contact} from './contact.js'
import {Profile} from './profile.js'
import {useNavigate} from "react-router-dom"

function App() {

  const Home = () => {
    return <div>
      página inicial Eita bixo 
    </div>
  }

  return (
    <div className="App">
      <Router>
        <navbar />
       {/*  <link to="./contact.js">Contact</link>*/}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
