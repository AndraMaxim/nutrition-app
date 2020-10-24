import React, { Component } from 'react';
import Personal  from './Personal';
import Gender  from './Gender';
import Biometrics from './Biometrics';
import Activity from './Activity';
import Goal from './Goal';
import AllInfo from './AllInfo';
import Logo from '../../images/pngaaa.com-1767786.png';
import { Link } from 'react-router-dom';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    NavLogo,
    HeroBg,
    HeroContent,
    VideoBg,
    HeroP,
} from './FormElements';


export class StepForm extends Component {
    state = {
        step: 1,

        // step 1
        firstName: '',
        lastName: '',

        // step 2
        gender: '',

        // step 3
        age: '', 
        height: '',
        weight: '',
        bmi: '',

        // step 4
        activity: '',

        // step 5
        goal: '',
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, gender, firstName, lastName, age, height, weight, activity, goal } = this.state;

        if(step === 1)
            return (<Personal 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                firstName={firstName} 
                lastName={lastName}
            />);
        if(step === 2)
            return (<Gender 
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                gender={gender}
            />);
        if(step === 3)
            return (<Biometrics
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                age={age} 
                height={height}
                weight={weight}
            />);
        if(step === 4)
            return (<Activity
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                activity={activity}
            />);
        if(step === 5)
            return (<Goal
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                goal={goal}
            />);
        if(step === 6)
            return (<AllInfo 
                firstName={firstName} 
                lastName={lastName}
                gender={gender} 
                age={age} 
                height={height}
                weight={weight}
                activity={activity}
                goal={goal}
                bmi={Math.round((weight/(height*height*0.0001)))}
                whater={Math.round(((0.033*weight)+Number.EPSILON)*10)/10}
                kcal={Math.round((10*weight+6.25*height-5*age-161))}
                prevStep = {this.prevStep}
            />);

    }

    render(){
        const { step } = this.state;

        return(
            <>
            <HeroContent>
                <HeroP>Step {step} of 6</HeroP>
                {this.showStep()}
            </HeroContent>
            <HeroContainer id='food'>
                <HeroBg>
                <Link to="/food" >
                    <NavLogo src={Logo} alt="NutritionApp-logo" />
                </Link>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

                </HeroBg>
            </HeroContainer>
            </>
        );
    }
}

export default StepForm;