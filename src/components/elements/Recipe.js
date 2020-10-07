import React from 'react';
import { StyledRecipe } from '../styles/StyledRecipe';

const Recipe = ({title,ingredients,nutrients}) => {
    return (
        <div className="recipe-container">
            <StyledRecipe>
                    <div className="nutrients-table">
                        <div className="nutrients-header">
                            <h3>{title}</h3>
                            <p>{ingredients}</p>
                        </div>
                        <div className="nutrients-content">
                            <ul className="nutrient-name">
                                {nutrients.map(foodNutrients => (
                                    <li>{foodNutrients.nutrientName}</li>
                                ))}
                            </ul>
                            <ul className="nutrient-value">
                                {nutrients.map(foodNutrients => (
                                    <li>{foodNutrients.value}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button className="recipe-button" type="submit">
                        Add to menu
                    </button>
            </StyledRecipe>
        </div>
    );
};

export default Recipe;