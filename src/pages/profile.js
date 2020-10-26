import React from 'react';
import Profile from '../components/Profile';
import HeroSearch from '../components/HeroSearch';
import ProfileNavbar from '../components/ProfileNavbar';

function ProfilePage() {
    return (
        <>
            <ProfileNavbar />
            <HeroSearch />
            <Profile />
        </>
    );
}

export default ProfilePage;
