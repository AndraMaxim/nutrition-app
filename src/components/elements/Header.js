import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from '../images/nutritionApp_logo.png';
import { StyledHeader, StyledLogo, StyledSignIn, StyledMenu } from '../styles/StyledHeader';

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledLogo src={Logo} alt="NutritionApp-logo" />
            </Link>
            <div className="right-menu-content">
                <Link to="/">
                    <StyledSignIn>
                        <p>Sign In</p>
                    </StyledSignIn>
                </Link>
                <Link to="/">
                    <StyledMenu>
                        <FontAwesomeIcon icon={faBars} name="bars" size="1x" />
                    </StyledMenu>
                </Link>
            </div>
        </div>
    </StyledHeader>
)

export default Header;