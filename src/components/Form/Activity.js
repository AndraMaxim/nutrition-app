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

class Activity extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { activity, handleChange } = this.props;
        return(
            <>
                <Container>
                    <FormWrap>
                        <FormContent>
                            <Form action='#'>
                                <FormH1>Daily activity</FormH1>

                                <FormSelect 
                                    value={activity} 
                                    onChange={handleChange('activity')}>
                                        <option defaultValue="Sedentary">Sedentary</option>
                                        <option value="Easy">Easy</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="High">High</option>
                                        <option value="Very High">Very High</option>
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

export default Activity;