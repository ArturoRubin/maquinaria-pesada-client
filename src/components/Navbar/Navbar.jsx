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
        <Link to="/"> Renta Maquinaria</Link>
      </div>
      <div className="navbar-options">
        <Link className="mr-3"to="/productos">
          Productos
        </Link>

        {isLoggedIn && (
          <>
            <a className="mx-3" onClick={logOutUser}>Cerrar Sesión</a>
            <Link to="/perfil">
              Perfil
              {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
            </Link>
            <span className="mx-3 ">{user && user.name}</span>
            <Link to="/crear-producto">
              Crear Producto
            </Link>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link className="mx-3" to="/registrarse">
             Registrarse
            </Link>
            <Link className="mx-3" to="/iniciar-sesion">
              Iniciar Sesión
            </Link>
            
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
