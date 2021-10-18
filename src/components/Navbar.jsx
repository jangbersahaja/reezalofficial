import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import jata from "../img/logo.png";

const Nav = styled.div`
  position: sticky;
  z-index: 999;
  top: 0;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  width: 300px;
`;

const LogoImg = styled.img`
  padding: 0;
  height: 28px;
`;

const LogoNameWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  &:hover {
    color: #d43076;
  }
`;

const LogoName = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 21px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const LogoTitle = styled.i`
  font-size: 10px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  @media (max-width: 992px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "360px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #2c4964;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 992px) {
    display: flex;
  }
`;

const MenuLink = styled(Link)`
  padding: 15px 15px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-in;
  font-size: 14px;
  &:hover {
    color: #d43076;
  }
`;

const Contact = styled(Link)`
  font-size: 14px;
  background-color: #fff;
  transition: all 0.3s ease-in;
  border: 2px solid #d43076;
  border-radius: 20px;
  margin-left: 50px;
  padding: 5px 10px;
  &:hover {
    background-color: #d43076;
    color: white;
  }

  @media (max-width: 992px) {
    margin: 20px 0;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Link to="/">
        <Logo href="">
          <LogoImg src={jata} />
          <LogoNameWrapper>
            <LogoName>Reezal Merican</LogoName>
            <LogoTitle>
              Minister of Housing and Local Government Malaysia
            </LogoTitle>
          </LogoNameWrapper>
        </Logo>
      </Link>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/blog">Blog</MenuLink>
        <MenuLink to="/kepalabatas">Kepala Batas</MenuLink>
        <MenuLink to="/media">Media</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <Contact to="/contact">Contact</Contact>
      </Menu>
    </Nav>
  );
};

export default Navbar;
