import React from 'react'
import { useAuth, useUser } from 'reactfire'

const PerfilUser = () => {
    const auth = useAuth()
    const { data: user} = useUser()
  return (
    <div>
        <h3>Mi Perfil de Usuario</h3>
        <p> Bienvenido {user?.displayName}</p>
        <p>Email:{user?.email}</p>
        <button onClick={() => auth.signOut()}>Cerrar Sesion</button>
    </div>
  )
}

export default PerfilUser