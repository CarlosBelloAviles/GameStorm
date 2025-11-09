
import { useGoogleAuth } from '../../hooks/useGoogleAuth';
import './Login.css';

const Login = () => {
  const { signInWithGoogle } = useGoogleAuth();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <button 
          onClick={handleGoogleLogin}
          className="google-login-button"
        >
          <img 
            src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
            alt="Google Logo" 
          />
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
};

export default Login;