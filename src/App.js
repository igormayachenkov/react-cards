import logo from './logo.svg';
import './App.css';
import PropList from './products/ProdList';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <span>React Example</span>
      </header>

      <div id="layout-list">
        <PropList />
      </div>

    </div>
  );
}

export default App;
