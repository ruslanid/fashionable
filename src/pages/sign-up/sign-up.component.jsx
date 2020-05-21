import React, { Component } from 'react';

import {
  SignUnContainer,
  TitleContainer,
  FooterContainer,
  LinkContainer
} from './sign-up.styles';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignUpPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("Password don't match");
      return;
    }
    this.setState({name: '', email: '', password: '', confirmPassword: ''});
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  render() {
    return (
      <SignUnContainer>
        <TitleContainer>
          Create an account
        </TitleContainer>

        <form onSubmit={this.handleSubmit}>

          <FormInput
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              handleChange={this.handleChange}
              required
          />

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

          <FormInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={this.state.confirmPassword}
              handleChange={this.handleChange}
              required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>                   

        </form>

        <FooterContainer>
         Already have an account? <LinkContainer to="/sign-in">Sign In</LinkContainer>
        </FooterContainer>
      </SignUnContainer>
    );
  }
};

export default SignUpPage; 