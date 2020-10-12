import React from 'react';
import { Link } from '@reach/router';

import { StyledNavigation } from '../styles/StyledNavigation';

const Navigation = () => (
    <StyledNavigation>
        <div className="navigation-content">
            <Link to="/components/Profile">
                <p>Create Profile</p>
            </Link>
            <p>|</p>
            <Link to="/components/Food">
                <p>Search Food</p>
            </Link>
        </div>
    </StyledNavigation>
);

export default Navigation;