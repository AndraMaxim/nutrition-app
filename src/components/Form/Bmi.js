import React, { Component } from 'react';
import {
    Container,
    FormWrap,
    FormContent,
    Form,
    FormButtonBack,
} from './FormElements';


class Bmi extends Component {
        constructor(props) {
        super(props);
        this.state = {
            bmi: '',
            bmiClass: ''
        }
        }  
    heightChange(height) {
        console.log(height);
        this.setState({
            height: height
        }, this.setBmi);
    }

    weightChange(weight) {
        console.log(weight);
        this.setState({
            weight: weight
        }, this.setBmi);
    }
    
        setBmi = () => {
        const { height, weight } = this.state;
            let bmi = ((weight / height / height) * 10000).toFixed(2);
            this.setState({
                bmi: bmi,
                bmiClass: this.getBmiClass(bmi)
            }, function() {
                console.log(this.state);
            });
        }
        
            getBmiClass(bmi) {
            if(bmi < 18.5) return 'Underweight';
            if(bmi >= 18.5 && bmi <= 24.9) return 'Normal';
            if(bmi >= 25 && bmi <= 29.9) return 'Overweight';
            if(bmi >= 30) return 'Obese';
        }
        
        render() {
        return (
            <>
                <Container>
                    <FormWrap>
                        <FormContent>
                            <Form>
                                <Output data={this.state}/>
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
    
    class Output extends React.Component {
        render() {
            let bmi = this.props.data.bmi;
            let bmiClass = this.props.data.bmiClass;
            return (
                <div className="output">
                    <h3>{bmi}</h3>
                    <h3
                        className={(this.props.data.bmiClass === "Obese") ? "danger" : ""}>
                        {bmiClass}
                    </h3>
                </div>
        );
        }
    }

export default Bmi;