import React, { useRef, useState } from 'react';
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
    TextError,
} from './UpdateProfileElements';

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
        .then(() => {
            history.push("/profile")
        })
        .catch(() => {
            setError("Failed to update account")
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
        <Container>
            <FormWrap>
            <FormContent>
                <Icon to='/profile'>X</Icon>
                <Form onSubmit={handleSubmit}>
                <FormH1>Update Profile</FormH1>
                {error && <TextError>{error}</TextError>}
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        type="email"
                        ref={emailRef}
                        required
                        defaultValue={currentUser.email}
                    />
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        type="password"
                        ref={passwordRef}
                        placeholder="Leave blank to keep the same"
                    />
                    <FormLabel>Password Confirmation</FormLabel>
                    <FormInput
                        type="password"
                        ref={passwordConfirmRef}
                        placeholder="Leave blank to keep the same"
                    />
                    <FormButton disabled={loading} className="w-100" type="submit">
                        Update
                    </FormButton>
                </Form>
            </FormContent>
            </FormWrap>
        </Container>
        <div className="w-100 text-center mt-2">
            <Link to="/profile">Cancel</Link>
        </div>
        </>
    )
}