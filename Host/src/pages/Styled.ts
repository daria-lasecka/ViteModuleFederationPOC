import styled from "styled-components";

export const RemoteAppContainer = styled.div`
  width: 100%;
  border: 1px dashed #646cff;
  padding: 2rem;
`;

export const Header = styled.h1`
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
