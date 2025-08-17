import React from 'react'
import { Outlet } from 'react-router-dom'
// Este componente maneja el diseño público de la aplicación, donde se muestran las rutas públicas como el Home, registro y login.

const PublicLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PublicLayout