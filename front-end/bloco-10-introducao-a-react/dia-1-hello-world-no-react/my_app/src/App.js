import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const lista = ['Jogar ', 'Estudar ', 'Bater Punheta ', 'Chorar ']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{ lista.map((item, idx) => {
          return `${idx+1} - ${item}`
        }) }</div>
      </header>
    </div>
  );
}

export default App;
