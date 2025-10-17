import { Navigate, Outlet } from "react-router-dom";
import { useSigninCheck } from "reactfire";

const AdminLayout = () => {
  // Este componente se encarga de verificar si el usuario está autenticado
  const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();

  // Si el estado es "loading" o no se ha emitido el resultado, mostramos un loader
  if (status === "loading" || !hasEmitted) {
    return (
      <div className="loadingContainer">
        <span className="loader"></span>
      </div>
    );
  }
// // Si el usuario no está autenticado, redirigimos a la página de login
  if (status === "success" && !signInCheckResult.signedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
