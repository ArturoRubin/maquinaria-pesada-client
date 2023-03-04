import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <div className="navbar-title">
        <span> Renta Maquinaria</span>
      </div>
      <div className="navbar-options">
      <Link to="/">
        <a className="mr-3">Home</a>
      </Link>

      {isLoggedIn && (
        <>
          <a onClick={logOutUser}>Logout</a>

          <Link to="/profile">
            <a>Profile</a>
            {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
          </Link>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <a className="mx-3">Sign Up</a>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <a className="mx-3">Login</a>{" "}
          </Link>
        </>
      )}
      </div>
     
    </nav>
  );
}

export default Navbar;
