import React, { Component } from 'react';
import {
    Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormButtonNext,
    FormBtnLink,
    FormButtonBack,
    Text
} from './FormElements';

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { gender, firstName, status, age, height, weight, activity, goal, bmi, bmiClass, whater, kcal } = this.props;
        return(
            <>
            <Container>
                    <FormWrap>
                        <FormContent>
                            <Form>
                                <FormH1>Hello {firstName}!</FormH1>
                                <Text>
                                Status: <strong>{status}</strong><br />
                                Gender: <strong>{gender}</strong><br />
                                Age: <strong>{age}</strong><br />
                                Height: <strong>{height} cm</strong><br />
                                Weight: <strong>{weight} kg</strong><br />
                                Daily Activity: <strong>{activity}</strong><br />
                                Your Goal: <strong>{goal}</strong><br />
                                Your Bmi: <strong>{bmi} {bmiClass}</strong><br />
                                Min Whater Intake: <strong>{whater} l/day</strong><br />
                                Daily kcal: <strong>{kcal}</strong><br />
                                <br />
                                <br />
                                </Text>
                                <FormButtonNext>
                                    <FormBtnLink to='/profile'>Done</FormBtnLink>
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

export default AllInfo;