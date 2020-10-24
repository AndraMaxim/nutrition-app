import React, { useState, useEffect } from 'react';
import { StyledRecipe, RecipeContent, RecipeBtn, RecipeBtnLink } from '../components/Search/StyledRecipe';

const DetailsPage = ({match}) =>  {
// function DetailsPage ({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const APP_ID = '8432ca16';
    const APP_KEY = '48c1946add1a58f213a994aa8f37067f';

    const [ recipe, setRecipe] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${match.params.id}`
            )

        const recipe = await fetchItem.json();
        setRecipe(recipe);
        console.log(recipe);
    }
    
            return (
                <>
                    <div>
                        <StyledRecipe>
                        <h1>test 1</h1>
                                <RecipeContent>
                                    <div className="recipe-info">
                                        <h1>{match.title}</h1>
                                        <p>Carbs: {match.carbs}g  |  Fat: {match.fat}g  |  Protein: {match.protein}g  |  Fiber: {match.fiber}g  </p>
                                        <h2>{match.calories} Kcal</h2>
                                        <img src={match.image} alt="recipe" />
                                        {/* <ul className="ingredient-name" >
                                            {recipe.ingredients.map(ingredients => (
                                                <li>{ingredients.text}</li>
                                            ))}
                                        </ul> */}
                                    </div>
                                </RecipeContent>
                                <RecipeBtn>
                                    <RecipeBtnLink to='/'>Add to menu</RecipeBtnLink>
                                </RecipeBtn>
                        </StyledRecipe>
                    </div>
                </>
            )
    };




export default DetailsPage;