import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSigninCheck } from "reactfire";

const AuthLayout = () => {
  // Este componente maneja la autenticación del usuario y redirige según su estado de inicio de sesión.
  const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();

  if (status === "loading" || !hasEmitted) {
    return (
      <div className="loadingContainer">
        <span className="loader"></span>
      </div>
    );
  }
// Si el usuario está autenticado, redirige a la página principal.
  if (status === "success" && signInCheckResult.signedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
