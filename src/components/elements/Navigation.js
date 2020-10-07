import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { StyledNavigation } from '../styles/StyledNavigation';

const Navigation = () => (
    <StyledNavigation>
        <div className="navigation-content">
            <Link to="/components/Bmi">
                <p>Calculate your BMI</p>
            </Link>
            <p>|</p>
            <Link to="/components/Food">
                <p>Search Food</p>
            </Link>
        </div>
    </StyledNavigation>
);

Navigation.propTypes = {
    movie: PropTypes.string,
}

export default Navigation;