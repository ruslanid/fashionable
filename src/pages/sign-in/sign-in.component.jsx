import React, { Component } from 'react';


import {
  SignInContainer,
  TitleContainer,
  FooterContainer,
  LinkContainer
} from './sign-in.styles';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignInPage extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''});
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
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="submit" googleSignIn>SIGN IN WITH GOOGLE</CustomButton>

        </form>

        <FooterContainer>
          Don't have an account? <LinkContainer to="/sign-up">Sign Up</LinkContainer>
        </FooterContainer>
      </SignInContainer>
    );
  }
};

export default SignInPage;