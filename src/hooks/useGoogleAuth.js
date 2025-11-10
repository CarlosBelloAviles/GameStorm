import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const useGoogleAuth = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            // El usuario ha iniciado sesión correctamente
            console.log('Usuario autenticado:', result.user);
            navigate('/'); // Redirigir al home después del login
            return result.user;
        } catch (error) {
            console.error('Error en la autenticación con Google:', error);
            if (error.code === 'auth/unauthorized-domain') {
                throw new Error('Este dominio no está autorizado para iniciar sesión. Por favor, contacta al administrador.');
            } else {
                throw error;
            }
        }
    };

    return { signInWithGoogle };
};