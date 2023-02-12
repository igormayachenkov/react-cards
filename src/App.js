import logo from './logo.svg';
import './App.css';
import PropList from './products/ProdList';
import api from './data/api'
import Data from './data/middleware';

const data = new Data(api)

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <span>React Example</span>
      </header>

      <div id="layout-list">
        <PropList data={data}/>
      </div>

    </div>
  );
}

export default App;
