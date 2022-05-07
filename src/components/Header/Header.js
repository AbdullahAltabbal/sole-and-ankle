import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import NavLink from '../NavLink/NavLink';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  height: 72px;
  padding: 8px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Side = styled.div`
  flex: 1;
`

const Nav = styled.nav`
padding-left:26px;;
margin: 0 32px;;
    display: flex;
    gap:32px;
    padding: 16px; 
`;

export default Header;
