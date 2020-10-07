import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Recipe from './Recipe';
import Grid from './Grid';

import {
    StyledSearchBar,
    StyledSearchBarContent,
} from '../styles/StyledSearchBar';


const SearchBar = () => {
    const API_KEY = 'p0tsWh3OGTV39l98NIRZLzJhQmGRsy06OfQhOsbC';
    
    const [ search, setSearch ] = useState("");
    const [ recipes, setRecipes] = useState([]);
    const [ query, setQuery] = useState('Banana');

    useEffect(() => {
        getRecipes();
    }, [query]);
    
    const getRecipes = async () => {
        const response = await fetch(
            `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${query}`
            );
    
            const data = await response.json();
            setRecipes(data.foods);
            console.log(data.foods);
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
                        key={recipe.fdcId}
                        title={recipe.description}
                        ingredients={recipe.ingredients}
                        nutrients={recipe.foodNutrients}
                        />
                    ))}
                </Grid>
        </div>
        );
    }

export default SearchBar;