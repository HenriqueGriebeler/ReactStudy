import './App.css';
import { useState } from 'react';
import htmlimg from './images/html.png';
import cssimg from './images/css3.png';
import JSimg from './images/javaScript.png';
import reactimg from './images/reactjs.png';


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

function App() {
<style>

</style>


  return (

    <div className="App">
     <Home />
    


    </div>
  );
}



export default App;

const Home = () => {

const [bookmark, setBookmark] = useState('none')

const mark = () => {
  bookmark=='black' ? setBookmark('none') : setBookmark('black')
console.log(bookmark)}

  return <div>


    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />


    <header>


    <span class="material-symbols-outlined" style={{backgroundColor: bookmark, padding: '5px', position: 'absolute', right: '10px', cursor: 'pointer'}} onClick={mark}>bookmark</span>

    <section>
      <h1 style={{backgroundColor: bookmark}}>Henrique de Araújo Griebeler</h1>
      <p id='sectionP1' style={{backgroundColor: bookmark}}>My start with web development not long ago, I started html and css in the first half of 2022, learning by myself as autodidact, watching videos and creating websites to practice.</p>
      <p id='sectionP1' style={{backgroundColor: bookmark}}>The second half of 2022 was dedicated to JavaScript and React.</p>   
      {/* JA TEM UM BACKGROUND, PRECISO COLOCAR AGORA coisas práticas. Posso estar aprimorando o site leitor de páginas e fazer funcionar como algo para demonstrar */}
    </section>
    </header>

      <div> {/* AQUI VAI EXPLICANDO COISAS DO CURRICULO */}
      
       </div>

        <div> {/* INICIO DAS CAIXAS */}
        
        <main>
    <h1 style={{paddingLeft: '25px', paddingTop: '10px', textAlign: 'center'}}>known technologies</h1>

          <div id='boxFrame'>

            <div id='boxFlex'>

            <div class='box'><img src={htmlimg} class='boxImage'/> HTML 5</div>
            <div class='box'><img src={cssimg} class='boxImage'/>CSS 3</div>
            <div class='box'><img src={JSimg} class='boxImage'/>JavaScript</div>
            <div class='box'><img src={reactimg} class='boxImage'/>React.JS</div>
            </div>
          </div>
      </main>
      </div>
      
          <div>
          <footer>

          </footer>
          </div>

  </div>
}
