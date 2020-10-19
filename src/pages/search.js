import React from 'react';
import Search from '../components/Search';
import HeroSearch from '../components/HeroSearch';
import Navbar from '../components/Navbar';

function SearchPage() {
    return (
        <>
        <Navbar />
        <HeroSearch />
        <Search />
        </>
    );
}

export default SearchPage;
