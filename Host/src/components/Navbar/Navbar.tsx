import { NavbarContainer, StyledNavLink } from "./Styles.ts";

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/remote">Remote App Inside the Host</StyledNavLink>
    </NavbarContainer>
  );
};

export default Navbar;
