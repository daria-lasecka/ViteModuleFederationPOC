import styled from "styled-components";
import { NavLink } from "react-router";

export const NavbarContainer = styled.nav`
  background-color: #2e2e2e; /* slightly lighter than background */
  border-bottom: 1px solid #1a1a1a;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

export const StyledNavLink = styled(NavLink)`
  color: #b0b0b0; /* default text color */
  text-decoration: none;
  padding: 8px 15px;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  /* Hover / focus states */
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #3a3a3a;
    outline: none;
  }

  /* Active state (NavLink automatically applies "active" class) */
  &.active {
    color: #1db954;
  }
`;
