import "./Footer.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Footer">
      <a href="">Condiciones de uso</a>
      <p>© 1996-2023, maquinariamexico.com, Inc. o sus afiliados</p>
    </nav>
  );
}

export default Navbar;