import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSigninCheck } from "reactfire";

const AuthLayout = () => {
  const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();

  if (status === "loading" || !hasEmitted) {
    return (
      <div className="loadingContainer">
        <span className="loader"></span>
      </div>
    );
  }

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
