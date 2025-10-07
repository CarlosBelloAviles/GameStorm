import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { AuthProvider, FirestoreProvider, StorageProvider, useFirebaseApp } from "reactfire";

const FirebaseServices = ({ children }) => {
 // Este componente envuelve a los hijos con los proveedores de Firebase
  const app = useFirebaseApp();
  const auth = getAuth(app)
  const firestore = getFirestore(app)
  const storage = getStorage(app)
  

  return (
    <AuthProvider sdk={auth}> 
      <FirestoreProvider sdk={firestore}>
        <StorageProvider sdk={storage}>
          { children }
        </StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
  
};

export default FirebaseServices;
