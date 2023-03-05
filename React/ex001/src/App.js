import "./App.css"

//STUDIYNG PROPS, CSS IMPORTATION AND COMPONENTS

function App() {
  return (
    <div className="App">
      <User salary={5000} position='Junior Programmer' company='Amazon'/>
      <User salary={8000} position='Middle Programmer' company='Amazon'/>
      <User salary={12000} position='Senior Programmer' company='Amazon'/>
    </div>
  );
}

export default App;

const User = (props) => {
  return (
  <div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
  </div>
  );
};