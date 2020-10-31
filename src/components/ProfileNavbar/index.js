import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Alert } from "react-bootstrap"
import { IconContext } from 'react-icons/lib';
// import Logo from '../../images/pngaaa.com-1767786.png';
// import { Link } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  Logo,
  NavBtn,
  Text,
  NavBtnLink
} from './ProfileNavbarElements';

const ProfileNavbar = () => {
  const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/")
        } catch {
            setError("Failed to log out")
        }
    }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      {error && <Alert variant="danger">{error}</Alert>}
        <Nav >
          <NavbarContainer>
            <Logo to="/profile" >
              Lime
                {/* <NavLogo src={Logo} alt="NutritionApp-logo" /> */}
            </Logo>
            <MobileIcon>
              <FaBars />
            </MobileIcon>
            <NavBtn>
              <Text>{currentUser.email} </Text>
              <NavBtnLink variant="link" onClick={handleLogout}> Log Out</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default ProfileNavbar;
