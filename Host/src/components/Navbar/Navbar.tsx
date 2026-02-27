import { NavbarContainer, StyledNavLink } from "./Styled.ts";
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
    console.log("toggleTheme", newTheme.name);
  };

  return (
    <NavbarContainer>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/backend">Backend Requests</StyledNavLink>
      <StyledNavLink to="/remote">Remote App</StyledNavLink>
      {/*TODO: fix this button's styles*/}
      <button
        onClick={toggleTheme}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Switch Theme
      </button>
    </NavbarContainer>
  );
};

export default Navbar;
