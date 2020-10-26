import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  FormLink,
  SignupLink
} from './SigninElements';

const SignIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signin } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await signin(emailRef.current.value, passwordRef.current.value)
      history.push("/profile")
    } catch {
      setError("Failed to sign in")
    }

    setLoading(false)
  }


  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Icon to='/'>X</Icon>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' ref={emailRef} required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' ref={passwordRef} required />
              
                <FormButton disabled={loading} type='submit'>
                  <FormLink to='/profile'>
                    Sign In
                  </FormLink>
                </FormButton>
              
              <Text><SignupLink to="/signin">Forgot Password?</SignupLink></Text>
              <Text>Need an account? <SignupLink to="/signup">Sign Up</SignupLink></Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
