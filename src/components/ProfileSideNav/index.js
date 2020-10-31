import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import {
    Nav,
    NavLinkBars,
    NavMenu,
    NavItems,
    NavToggle,
    NavSpan
} from './ProfileSideNavElements';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
            <NavLinkBars to='#'>
                <FaIcons.FaBars onClick={showSidebar} />
            </NavLinkBars>
            </Nav>
            <NavMenu className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <NavItems onClick={showSidebar}>
                <NavToggle>
                <NavLinkBars to='#'>
                    <AiIcons.AiOutlineClose />
                </NavLinkBars>
                </NavToggle>
                {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        <NavSpan>{item.title}</NavSpan>
                    </Link>
                    </li>
                );
                })}
            </NavItems>
            </NavMenu>
        </IconContext.Provider>
        </>
    );
}

export default Navbar;