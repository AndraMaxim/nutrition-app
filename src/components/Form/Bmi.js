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


class Bmi extends Component {
        constructor(props) {
        super(props);
        this.state = {
            height: '',
            weight: '',
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
            <div className="App">
            <Output data={this.state}/>        
            </div>
        );
        }
    }
    
    class Output extends React.Component {
        render() {
            let height = this.props.data.height;
            let weight = this.props.data.weight;
            let bmi = this.props.data.bmi;
            let bmiClass = this.props.data.bmiClass;
            return (
                <div className="output">
                    <h3>{height}</h3>
                    <h3>{weight} lbs</h3>
                    <h3>{bmi}</h3>
                    <h3
                        className={(this.props.data.bmiClass === "Obese") ? "danger" : ""}>
                        {bmiClass}
                        {(this.props.data.bmiClass === "Obese") ? <a href='#'>You need to get some help</a> : ""}
                    </h3>
                </div>
        );
        }
    }

export default Bmi;