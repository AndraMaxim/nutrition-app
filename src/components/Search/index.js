import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Recipe from './Recipe';
import Grid from './Grid';

import {
    StyledSearchBar,
    StyledSearchBarContent,
} from './SearchBarElements';


const SearchBar = () => {
    const APP_ID = '0edd9e6d';
    const APP_KEY = 'c22fa1fe261e0d27b053f3734253b12f';
    
    const [ search, setSearch ] = useState("");
    const [ recipes, setRecipes] = useState([]);
    const [ query, setQuery] = useState('');

    useEffect(() => {
        getRecipes();
    }, [query]);
    
    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`
            );
    
            const data = await response.json();
            setRecipes(data.hits);
            console.log(data.hits);
    };

    const doSearch = event => {
        setSearch (event.target.value)
        console.log(search);
    }

    const getSearch = event => {
        event.preventDefault();
        setQuery(search);
        setSearch('');
    }

        return (
            <>
                <div className="search-recipe">
                    <StyledSearchBar>
                        <StyledSearchBarContent>
                            <FontAwesomeIcon icon={faSearch} className="fa-search" name="search" />
                                <form onSubmit={getSearch} className="search-form">
                                    <input
                                        type="text"
                                        placeholder="Search food"
                                        value={search}
                                        onChange={doSearch}
                                    />
                                    <button className="search-button" type="submit">
                                        Search
                                    </button>
                                </form>
                        </StyledSearchBarContent>
                    </StyledSearchBar>
                    <Grid>
                        {recipes.map(recipe => (
                            <Recipe
                            key={recipe.recipe.label}
                            uri={recipe.recipe.uri}
                            title={recipe.recipe.label}
                            calories={parseInt(recipe.recipe.calories)}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                            carbs={parseInt(recipe.recipe.totalNutrients.CHOCDF.quantity)}
                            fat={parseInt(recipe.recipe.totalNutrients.FAT.quantity)}
                            protein={parseInt(recipe.recipe.totalNutrients.PROCNT.quantity)}
                            fiber={parseInt(recipe.recipe.totalNutrients.FIBTG.quantity)}
                            />
                        ))}
                    </Grid>
                    
            </div>
        </>
        );
    }

export default SearchBar;