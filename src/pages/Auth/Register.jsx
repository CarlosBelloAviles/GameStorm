import { useState } from 'react';
import { useGoogleAuth } from '../../hooks/useGoogleAuth';
import './Register.css';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { signInWithGoogle } = useGoogleAuth();

  const handleGoogleRegister = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signInWithGoogle();
      // La redirección se maneja en el hook useGoogleAuth
    } catch (error) {
      console.error("Error en el registro con Google:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Registro</h2>
        {error && <div className="error-message">{error}</div>}
        <button 
          onClick={handleGoogleRegister}
          className="google-register-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <span>Cargando...</span>
          ) : (
            <>
              <img 
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
                alt="Google Logo" 
              />
              Registrarse con Google
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Register;