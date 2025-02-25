import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = !!localStorage.getItem("accessToken");
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
