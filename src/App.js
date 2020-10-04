import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/Product'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/product/:id" component={Product}/>                    
                  </Switch>
                  <Footer /> 
             </div>
       </BrowserRouter>
    );
  }
}

export default App;