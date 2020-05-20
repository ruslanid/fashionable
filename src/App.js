import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import ContactUsPage from './pages/contact-us/contact-us.component';
import AuthenticationPage from './pages/authentication/authentication.component';


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/authentication" component={AuthenticationPage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
