import {
  Container,
  NavbarContainer,
  StyledNavButton,
  StyledNavLink,
} from "./Styled.ts";
import { hostBrandATheme, hostBrandBTheme, type Theme } from "@/theme.ts";

const Navbar = ({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: (value: Theme) => void;
}) => {
  const toggleTheme = () => {
    const newTheme =
      theme.name === "Brand A" ? hostBrandBTheme : hostBrandATheme;
    setTheme(newTheme);
  };

  return (
    <Container>
      <NavbarContainer>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/backend">Backend Requests</StyledNavLink>
        <StyledNavLink to="/remote">Remote App</StyledNavLink>
      </NavbarContainer>
      <StyledNavButton onClick={toggleTheme}>Switch Theme</StyledNavButton>
    </Container>
  );
};

export default Navbar;
