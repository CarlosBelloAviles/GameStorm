import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Private/Favorites";
import Home from "./pages/Public/Home";
import RootLayout from "./layout/RootLayout";
import PublicLayout from "./layout/PublicLayout";
import AdminLayout from "./layout/AdminLayout.";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PerfilUser from "./pages/Private/PerfilUser";

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
            <Route path="favorites" element={<Favorites />} />
            <Route path="usuario" element={<PerfilUser />} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
