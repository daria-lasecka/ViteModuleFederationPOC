import { NavbarContainer, StyledNavLink } from "./Styles.ts";

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/backend">Backend Requests</StyledNavLink>
      <StyledNavLink to="/remote">Remote App</StyledNavLink>
    </NavbarContainer>
  );
};

export default Navbar;
