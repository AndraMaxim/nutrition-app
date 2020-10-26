import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom";
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
    SigninLink
} from './SignupElements';

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <>
        <Container>
            <FormWrap>
                <FormContent>
                    <Icon to='/'>X</Icon>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form  onSubmit={handleSubmit}>
                        <FormH1>Sign up</FormH1>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="email" ref={emailRef} required />
                        <FormLabel>Password</FormLabel>
                        <FormInput type="password" ref={passwordRef} required />
                        <FormLabel>Password Confirmation</FormLabel>
                        <FormInput type="password" ref={passwordConfirmRef} required />
                        <FormButton disabled={loading} type="submit">
                        Sign Up
                        </FormButton>

                        <Text>Already have an account?  <SigninLink to="/signin">Sign In</SigninLink></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default Signup;