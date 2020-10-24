import React, { Component } from 'react';
import {
    Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButtonNext,
} from './FormElements';

class Personal extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { firstName, lastName, handleChange } = this.props;
        return(
            <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Enter your personal information:</FormH1>
                            <FormLabel />
                                <FormInput 
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    placeholder="First Name"
                                    onChange={handleChange('firstName')}
                                    required
                                />
                            <FormLabel />
                                <FormInput 
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    placeholder="Last Name"
                                    onChange={handleChange('lastName')}
                                    required
                                />
                            <FormButtonNext type='submit' className="Next" onClick={this.continue}>
                                Next »
                            </FormButtonNext>
                            </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            </>
        );
    }
}

export default Personal;