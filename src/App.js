import './App.css';
import Home from './Components/Home'
import DataProvider from './Context/DataProvider';

function App() {

  return (
    <DataProvider className="App" >
      <Home/>
    </DataProvider>
  );
}

export default App;
