import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container navbar">
      <Link to="/">Home</Link>
      <nav className="nav-links">
        <Link to="/players">Players</Link>
        <Link to="/teams">Teams</Link>
      </nav>
    </div>
  );
};

export default Navbar;
