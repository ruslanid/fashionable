import React, { Component } from 'react';

import {
  SignInContainer,
  TitleContainer,
  ErrorContainer,
  FooterContainer,
  LinkContainer
} from './sign-in.styles';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase';

class SignInPage extends Component {
  
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleSubmit = async event => {
    const {email, password} = this.state;
    event.preventDefault();

    if (email === '' || password === '') {
      this.setState({error: 'All fields are required'});
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/invalid-email') {
        this.setState({error: 'Invalid email format'});
      } else if (error.code === 'auth/user-not-found') {
        this.setState({error: 'Invalid email or password'})
      } else {
        this.setState({error: 'Unexpected error. Please try again.'});
      }
    }
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  render() {
    return (
      <SignInContainer>
        <TitleContainer>
            Sign in into your account
        </TitleContainer>

        <form onSubmit={this.handleSubmit}>

          <FormInput
            type="text"
            name="email"
            placeholder="Email *"
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            placeholder="Password *"
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <ErrorContainer>
            {this.state.error}
          </ErrorContainer>

          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            googleSignIn
            onClick={signInWithGoogle}
          >
            SIGN IN WITH GOOGLE
          </CustomButton>

        </form>

        <FooterContainer>
          Don't have an account? <LinkContainer to="/sign-up">Sign Up</LinkContainer>
        </FooterContainer>
      </SignInContainer>
    );
  }
};

export default SignInPage;