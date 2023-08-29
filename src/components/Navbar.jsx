import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      
      <Link to="/">Home</Link>
      <Link to="/signup">Registro</Link>
      <Link to="/login">Acceso</Link>
      <Link to="/private">Pagina privadas</Link>

    </div>
  )
}

export default Navbar