import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
// import Logo from '../../images/pngaaa.com-1767786.png';
// import { Link } from 'react-router-dom';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  Logo,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Text
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <Logo to="/" onClick={toggleHome} >
              Lime
                {/* <NavLogo src={Logo} alt="NutritionApp-logo" /> */}
            </Logo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='food'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Food
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='profile'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Profile
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
              <Text>/</Text>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
