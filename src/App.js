import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import ContactUsPage from './pages/contact-us/contact-us.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';

import { auth, createUserDocument } from './firebase/firebase';

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        try {
          const userRef = await createUserDocument(userAuth);

          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            })
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        this.setState({currentUser: null});
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.state;

    return (
      <div className="App">
          <Header currentUser={currentUser} />
          <Switch>
            <Route 
              path="/sign-in"
              render={() => currentUser ? (<Redirect to="/" />) : (<SignInPage />)}
            />
            <Route 
              path="/sign-up"
              render={() => currentUser ? (<Redirect to="/" />) : (<SignUpPage />)}
            />
            <Route path="/contact-us" component={ContactUsPage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/" component={HomePage} />
          </Switch>
      </div>
    )
  }
};

export default App;
