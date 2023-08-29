import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("authToken")

    // ! ...

  }

  return (
    <div>
      
      <Link to="/">Home</Link>
      <Link to="/signup">Registro</Link>
      <Link to="/login">Acceso</Link>
      <Link to="/private">Pagina privadas</Link>
      <button onClick={handleLogout}>Cerrar Sesión</button>

    </div>
  )
}

export default Navbar