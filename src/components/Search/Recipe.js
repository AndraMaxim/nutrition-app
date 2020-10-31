import React from 'react';
import { 
    StyledRecipe, 
    RecipeContent, 
    RecipeBtn, 
    RecipeBtnLink, 
    DetailsLink 
} from './RecipeElements';

const Recipe = ({uri,title,calories,image,ingredients,carbs,fat,protein,fiber}) => {
    return (
        <>
                <StyledRecipe>
                    <DetailsLink to={`/search/${uri}`}>
                        <RecipeContent>
                            <div className="recipe-info">
                                <h1>{title}</h1>
                                <p>Carbs: {carbs}g  |  Fat: {fat}g  |  Protein: {protein}g  |  Fiber: {fiber}g  </p>
                                <h2>{calories} Kcal</h2>
                                <img src={image} alt="recipe" />
                                <ul className="ingredient-name" >
                                    {ingredients.map(ingredients => (
                                        <li>{ingredients.text}</li>
                                    ))}
                                </ul>
                            </div>
                        </RecipeContent>
                    </DetailsLink>
                        <RecipeBtn>
                            <RecipeBtnLink to='/search'>Add to menu</RecipeBtnLink>
                        </RecipeBtn>
                </StyledRecipe>
                
        </>
    );
};

export default Recipe;