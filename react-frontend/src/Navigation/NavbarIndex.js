import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/farmer' activeStyle>
                        Farmer
                    </NavLink>
                    <NavLink to='/plants' activeStyle>
                        Plants
                    </NavLink>
                    <NavLink to='/fertilizer' activeStyle>
                        Fertilizer
                    </NavLink>

                </NavMenu>

            </Nav>
        </>
    );
};

export default Navbar;