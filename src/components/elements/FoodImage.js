import React from 'react';

import { StyledFoodImage } from '../styles/StyledFoodImage';


const FoodImage = () => (
    <StyledFoodImage>
        <div className="foodimage-content">
            <div className="foodimage-text">
                <h1>Welcome to Nutrition APP</h1>
                <p>Start designing a menu that fits your lifestyle and preferences!</p>
            </div>
        </div>
    </StyledFoodImage>
);

export default FoodImage;