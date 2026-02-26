import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "2rem" }}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/remote">Remote App Inside the Host</NavLink>
    </nav>
  );
};

export default Navbar;
