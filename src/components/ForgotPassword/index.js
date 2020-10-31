import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
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
    TextError,
    TextSuccess,
    SignupLink
} from './ForgotPasswordElements';

const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                    <Icon to='/'>X</Icon>
                        <Form onSubmit={handleSubmit}>
                        <FormH1>Reset your pasword</FormH1>
                        {error && <TextError>{error}</TextError>}
                        {message && <TextSuccess>{message}</TextSuccess>}
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' ref={emailRef} required />
                            <FormButton disabled={loading} type='submit'>
                                Reset Password
                            </FormButton>
                        <Text><SignupLink to="/signin">Sign In</SignupLink></Text>
                        <Text>Need an account? <SignupLink to="/signup">Sign Up</SignupLink></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
};

export default ForgotPassword;