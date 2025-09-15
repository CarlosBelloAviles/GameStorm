import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Public/Home/Home";
import RootLayout from "./layout/RootLayout";
import PublicLayout from "./layout/PublicLayout";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout.";
import { lazySuspense } from "./components/common/LazySuspense";

// Deferir la carga de componentes para mejorar el rendimiento
const Favorites = lazy(() => import("./pages/Private/Favorites/Favorites"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const PerfilUser = lazy(() => import("./pages/Private/PerfilUser"));

function App() {
 return (
      <>
      <Navbar />
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="favorites" element={lazySuspense(Favorites)} />
            <Route path="usuario" element={lazySuspense(PerfilUser)} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={lazySuspense(Login)} />
            <Route path="register" element={lazySuspense(Register)} />
          </Route>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
