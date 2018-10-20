import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  border-bottom: 2px solid #cccc;
  padding: 0 30px;
  margin-bottom: 20px;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style-type: none;
`;

const LinkComp = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: #555;

  :hover {
    color: #000;
  }
`;

const Navbar = () => (
  <Nav>
    <a href="/">TheWeatherApp</a>
    <NavUl>
      <li>
        <LinkComp className="nav-link" to={{ pathname: "/" }}>
          Search City
        </LinkComp>
      </li>
      <li>
        <LinkComp className="nav-link" to={{ pathname: "/weather" }}>
          Check Weather
        </LinkComp>
      </li>
    </NavUl>
  </Nav>
);

export default Navbar;
