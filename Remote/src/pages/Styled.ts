import styled from "styled-components";

export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin: 0;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.navbarLinkText};
  text-decoration: none;

  &:visited {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.buttonBorderHover};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
