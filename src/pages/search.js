import React from 'react';
import Search from '../components/Search';
import HeroSearch from '../components/HeroSearch';
import ProfileNavbar from '../components/ProfileNavbar';

function SearchPage() {
    return (
        <>
            <ProfileNavbar />
            <HeroSearch />
            <Search />
        </>
    );
}

export default SearchPage;
