import logo from './logo.svg';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import BrandHeader from "./components/header/BrandHeader/brandHeader";
import { BrowserRouter as Router, MemoryRouter, Route, Switch} from 'react-router-dom';
import Index from './components/pages/index/index';
import MuniApp from './components/pages/muniapp/muniapp';
import Galeria from './components/pages/galeria/Galeria'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <BrandHeader></BrandHeader>
      <section>
        <Switch>
          <Route path="/" exact>
              <Index />
          </Route>
          <Route path="/muniapp" exact>
              <MuniApp />
          </Route>
          <Route path="/munasbar" exact>

          </Route>
          <Route path="/asanic" exact>
            
          </Route>
          <Route path="/galeria" exact>
            <Galeria />
          </Route>
          <Route path="/arbitrios" exact>
            
          </Route>
          <Route path="/noticias" exact>
            
          </Route>
          <Route path="/contacto" exact>
            
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
