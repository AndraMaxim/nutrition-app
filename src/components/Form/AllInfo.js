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
        const { gender, firstName, age, height, weight, activity, goal, bmi, whater, kcal } = this.props;
        return(
            <>
            <Container>
                    <FormWrap>
                        <FormContent>
                            <Form>
                                <FormH1>Hello {firstName}!</FormH1>
                                <Text>
                                Gender: <b>{gender}</b><br />
                                Age: <b>{age}</b><br />
                                Height: <b>{height} cm</b><br />
                                Weight: <b>{weight} kg</b><br />
                                Daily Activity: <b>{activity}</b><br />
                                Your Goal: <b>{goal}</b><br />
                                Your Bmi: <b>{bmi}</b><br />
                                Min Whater Intake: <b>{whater} l/day</b><br />
                                Daily kcal: <b>{kcal}</b><br />
                                <br />
                                <br />
                                </Text>
                                <FormButtonNext>
                                    <FormBtnLink to='/search'>Done</FormBtnLink>
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