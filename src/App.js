import logo from './logo.svg';
import './App.css';

function Person(){
  return (
    <div className="person">
      <h3>Nombre: Pedro</h3>
      <p>Edad: 25</p>
    </div>
  )
}
function Lista(){
  return (
    <div className="lista">
      <h3>Numeros</h3>
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola mundo</h1>
      <Person />
      <Lista />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
