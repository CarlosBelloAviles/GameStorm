import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useAuth } from 'reactfire'

const Register = () => {

     const auth = useAuth()

    const handleClickGoogle =  async () => {
      try {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
      } catch (error) {
        console.error("Error en Iniciar Sesion con Google", error)
      }
    }
  return (
    <div>
        <h3>Regsiter</h3>
        <button onClick={handleClickGoogle}> Sign In Google</button>
    </div>
  )
}

export default Register