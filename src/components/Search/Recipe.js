import React from 'react';
import { StyledRecipe } from './StyledRecipe';

const Recipe = ({title,calories,image,ingredients,carbs,fat,protein,fiber}) => {
    return (
        <div className="recipe-container">
            <StyledRecipe>
                    <div className="nutrients-table">
                        <div className="nutrients-header">
                            <h3>{title}</h3>
                            <h6>Carbs: {carbs} | Fat: {fat} | Protein: {protein} | Fiber: {fiber}  </h6>
                            <h5>{calories} Kcal</h5>
                            <img src={image} alt="" />
                            <ul className="ingredient-name">
                                {ingredients.map(ingredients => (
                                    <li>{ingredients.text}</li>
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