import logo from './logo.svg';
import React, {useContext, useEffect} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import BrandHeader from "./Components/header/BrandHeader/brandHeader";
import { BrowserRouter as Router, MemoryRouter, Route, Switch} from 'react-router-dom';
import Index from './Components/pages/index/index';
import MuniApp from './Components/pages/muniapp/muniapp';
import Galeria from './Components/pages/galeria/Galeria.js'
import Footer from './Components/Footer/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/pages/login/Login';
import SignUp from './Components/pages/login/SignUp';
import Landing from './Components/pages/landing/Landing'
import {Context as AuthContext} from './Components/Context/AuthProvider'
import Asanic from './Components/pages/asanic/asanic';

const App = () => {
   const { state,persistLogin}  = useContext (AuthContext)
   const data = false
 useEffect(()=>{
   persistLogin();
 },[])


  return (
    <>
    {!state.loading && (
    <>{
      state.loggedIn ? (
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
            <Asanic />
          </Route>
          <Route path="/galeria" exact>
            <Galeria />
          </Route>
          <Route path="/arbitrios" exact>
            
          </Route>
          <Route path="/noticias" exact>
            
          </Route>
          <Route path="/landing" exact>
            <Landing/>
          </Route>
          
        </Switch>
      
        
      </section>
        
      <Footer></Footer>
    
    </Router>): (
      <Router>
        <Switch>
        <Route path="/" exact>
          <Login />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/signup" exact>
            <SignUp />
          </Route>
       
        </Switch>
        </Router>

    )}
    
    
  </>
    )}
    </>
  );
}

export default App;
