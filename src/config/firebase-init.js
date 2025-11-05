import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

export default app;