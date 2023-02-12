import logo from './logo.svg';
import './App.css';
import ProdList from './products/ProdList';
import api from './data/api'
import Data from './data/middleware';

const data = new Data(api)

function App() {
  return (
    <div id="app" className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <span>React expandable cards example</span>
      </header>

      <div id="layout-list">
        <ProdList data={data}/>
      </div>

    </div>
  );
}

export default App;
