import styled from "styled-components";
import { NavLink } from "react-router";
import { StyledButton } from "@/pages/Styled.ts";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.navbarBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  box-shadow: 0 2px 5px ${({ theme }) => theme.colors.navbarBorder};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarContainer = styled.nav`
  padding: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.navbarLinkText};
  text-decoration: none;
  padding: 16px 24px;
  margin-right: 10px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};;
    background-color:  ${({ theme }) => theme.colors.buttonHover};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
`;

export const StyledNavButton = styled(StyledButton)`
  margin-right: 10px;
  margin-bottom: 0;
`;
