import './App.css';
import htmlimg from './images/html.png'
import cssimg from './images/css3.png'
import JSimg from './images/javaScript.png'
import reactimg from './images/reactjs.png'

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
  return <div>
    <header>
    <section>
      <h1>Henrique de Araújo Griebeler</h1>
      <p id='sectionP1'>My start with web development not long ago, I started html and css in the first half of 2022, learning by myself as autodidact, watching videos and creating websites to practice.</p>
      <p id='sectionP1'>The second half of 2022 was dedicated to JavaScript and React.</p>   
      {/* JA TEM UM BACKGROUND, PRECISO COLOCAR AGORA coisas práticas. Posso estar aprimorando o site leitor de páginas e fazer funcionar como algo para demonstrar */}
    </section>
    </header>

      <div> {/* AQUI VAI EXPLICANDO COISAS DO CURRICULO */}
      
       </div>

        <div> {/* INICIO DAS CAIXAS */}
        
        <main>
    <h1 style={{paddingLeft: '25px', paddingTop: '10px'}}>known technologies</h1>

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
