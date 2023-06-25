import React,{useContext} from "react";
import { Redirect, Route,Switch } from "react-router-dom";

import "./App.css";

import About from "./Pages/About";
import Store from "./Pages/Store";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Components/Products/ProductDetails";
import AuthContext from "./store/auth-context";



import Home from './Pages/Home';
import AuthPage from "./Pages/AuthPage";


function App() {
  const authctx=useContext(AuthContext);
  const login=authctx.isLoggenIn;
  return (
    <div>
   
      <main>
        <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/store'>
        {login && 
        <Store/>}
        {!login && 
        <Redirect to='/auth'/> }
      </Route>
      <Route exact path='/contact'>
        <ContactUs />
      </Route>
      <Route exact path='/auth'>
        <AuthPage/>
        
      </Route>
      <Route path='/productdetails/:id'>
      <ProductDetails />
    </Route>

      </Switch>
      </main>
      
    </div>
  );
}

export default App;
