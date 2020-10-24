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
    FormButtonBack,
} from './FormElements';

class Biometrics extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

        const { age, weight, height, handleChange } = this.props;
        return(
            <>
                <Container>
                    <FormWrap>
                        <FormContent>
                            <Form action='#'>
                                <FormH1>Enter your personal data</FormH1>
                                <FormLabel />
                                    <FormInput 
                                        type="number"
                                        name="age"
                                        value={age}
                                        onChange={ handleChange('age') }
                                        placeholder="Age"
                                        required
                                    />
                                <FormLabel />
                                    <FormInput 
                                        name="height"
                                        type="number" 
                                        min="1" max="200"
                                        placeholder="Height(cm)"
                                        defaultValue={ height } 
                                        onChange={ handleChange('height') }
                                        required
                                    />
                                <FormLabel />
                                    <FormInput 
                                        name="weight"
                                        type="number" 
                                        min="1" max="100"
                                        placeholder="Weight(kg)"
                                        defaultValue={ weight } 
                                        onChange={ handleChange('weight') }
                                        required
                                    />
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


export default Biometrics;