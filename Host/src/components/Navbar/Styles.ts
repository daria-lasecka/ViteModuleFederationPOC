import styled from "styled-components";
import { NavLink } from "react-router";

export const NavbarContainer = styled.nav`
  background-color: #2e2e2e;
  border-bottom: 1px solid #1a1a1a;
  box-shadow: 0 2px 5px #1a1a1a;
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: #b0b0b0;
  text-decoration: none;
  padding: 16px 24px;
  margin-right: 10px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #3a3a3a;
  }

  &.active {
    color: #646cff;
  }
`;
