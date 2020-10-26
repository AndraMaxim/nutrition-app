import React from 'react';
import Icon1 from '../../images/undraw_healthy_lifestyle_6tyl.svg';
import Icon2 from '../../images/undraw_cooking_lyxy-2.svg';
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    ServiceLink,
    RecipeBtn,
    RecipeBtnLink
} from './ProfileElements';

const Profile = () => {
    return (
        <ServicesContainer id='services'>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Your Data</ServicesH2>
                <ServicesP>
                All you need to do is add or update your information and you're ready to go.
                </ServicesP>
                <RecipeBtn>
                    <RecipeBtnLink to='/form'>Update</RecipeBtnLink>
                </RecipeBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Nutrition plan</ServicesH2>
                <ServicesP>
                Choose from a variety of recipes and create a plan that fits your preferences.
                </ServicesP>
                <RecipeBtn>
                    <RecipeBtnLink to='/search'>Go to recipes</RecipeBtnLink>
                </RecipeBtn>
            </ServicesCard>
        </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Profile;