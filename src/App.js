import logo from './logo.svg';
import './App.css';
import { DataProvider } from './contexts/DataContext';
import List from './components/List/List';

const Comp = ({test}) => {
  return (
    <h1>{test}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Comp test={"Hoi hallo"} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <DataProvider>
        <List />
      </DataProvider>
    </div>
  );
}



export default App;
