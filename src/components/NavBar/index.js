import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from "./NavBarElements"

const NavBar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink exact to="/" activeStyle={{ color: 'white' }} >
            Home
          </NavLink>
          <NavLink exact to="/baseballsavedus" activeStyle={{ color: 'white' }}>
            Baseball Saved Us
          </NavLink>
          <NavLink exact to="/sylvia&aki" activeStyle={{ color: 'white' }} >
            Sylvia & Aki
          </NavLink>
          <NavLink exact to="/theycalledusenemy" activeStyle={{ color: 'white' }}>
            They Called Us Enemy
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default NavBar;
