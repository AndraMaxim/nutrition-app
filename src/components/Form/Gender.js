import React, { Component } from "react";
import {
    Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormButtonNext,
    FormButtonBack,
    FormSelect
} from './FormElements';

class Gender extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { gender, handleChange } = this.props;
        return(
            <>
                <Container>
                    <FormWrap>
                        <FormContent>
                            <Form action='#'>
                                <FormH1>Your Gender</FormH1>

                                <FormSelect 
                                    value={gender} 
                                    onChange={handleChange('gender')}>
                                        <option defaultValue="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </FormSelect>

                                <FormButtonNext type='submit' className="Next" onClick={this.continue}>
                                    Next »
                                </FormButtonNext>
                                <FormButtonBack type='submit' className="Back" onClick={this.back}>
                                    « Back
                                </FormButtonBack>
                                </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </>
        );
    }
}

export default Gender;