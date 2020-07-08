import React, { Component } from 'react';

import {
  SignUnContainer,
  TitleContainer,
  ErrorContainer,
  FooterContainer,
  LinkContainer
} from './sign-up.styles';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserDocument } from '../../firebase/firebase';

class SignUpPage extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: ''
  };

  handleSubmit = async (event) => {
    const {displayName, email, password, confirmPassword} = this.state;
    event.preventDefault();

    if (displayName === '' || email === '' || password === '' || confirmPassword === '') {
      this.setState({error: 'All fields are required'});
      return;
    } else if (password.length < 6) {
      this.setState({error: 'Password needs to be at least 6 characters long'});
      return;
    } else if (password !== confirmPassword) {
      this.setState({error: 'Passwords do not match'});
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserDocument(user, {displayName});
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        this.setState({error: "Account with this email already exists"});
      } else if (error.code === 'auth/invalid-email') {
        this.setState({error: 'Invalid email format'});
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
      <SignUnContainer>
        <TitleContainer>
          Create an account
        </TitleContainer>

        <form onSubmit={this.handleSubmit}>

          <FormInput
              type="text"
              name="displayName"
              placeholder="Display name *"
              value={this.state.displayName}
              handleChange={this.handleChange}
          />

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

          <FormInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm password *"
              value={this.state.confirmPassword}
              handleChange={this.handleChange}
          />

          <ErrorContainer>
            {this.state.error}
          </ErrorContainer>

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