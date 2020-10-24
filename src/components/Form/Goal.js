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

class Goal extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { goal, handleChange } = this.props;
        return(
            <>
                <Container>
                    <FormWrap>
                        <FormContent>
                            <Form action='#'>
                                <FormH1>What is your Goal?</FormH1>

                                <FormSelect 
                                    value={goal} 
                                    onChange={handleChange('goal')}>
                                        <option defaultValue="Maintain Weight">Maintain Weight</option>
                                        <option value="Lose Weight">Lose Weight</option>
                                        <option value="Gain Muscle">Gain Muscle</option>
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

export default Goal;