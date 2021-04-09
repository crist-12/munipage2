import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer'
import Galeria from './Components/Galeria/Galeria'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Galeria></Galeria>
      <Footer></Footer>
    </div>
  );
}

export default App;
