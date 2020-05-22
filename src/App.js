import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Header from './components/header/header.component';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import ContactUsPage from './pages/contact-us/contact-us.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';

import { auth, createUserDocument } from './firebase/firebase';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        try {
          const userRef = await createUserDocument(userAuth);

          userRef.onSnapshot(snapshot => {
            setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
            })
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        setCurrentUser(null);
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.props;

    return (
      <div className="App">
          <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
