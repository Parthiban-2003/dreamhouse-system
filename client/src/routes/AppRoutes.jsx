import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useAuth } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

// Lazy Pages
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));

// Engineer
const Dashboard = lazy(() => import("../pages/engineer/Dashboard"));
const Materials = lazy(() => import("../pages/engineer/Materials"));
const Payments = lazy(() => import("../pages/engineer/Payments"));
const Employees = lazy(() => import("../pages/engineer/Employees"));
const Profile = lazy(() => import("../pages/engineer/Profile"));

// Customer
const EngineersList = lazy(() => import("../pages/customer/EngineersList"));
const EngineerDetail = lazy(() => import("../pages/customer/EngineerDetail"));

// Admin
const Users = lazy(() => import("../pages/admin/Users"));
const EngineersAdmin = lazy(() => import("../pages/admin/Engineers"));

const AppRoutes = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading App...
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen text-lg">
          Loading Page...
        </div>
      }
    >
      <Routes>

        {/* Landing */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Engineer */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["engineer"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/materials"
          element={
            <ProtectedRoute roles={["engineer"]}>
              <Materials />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payments"
          element={
            <ProtectedRoute roles={["engineer"]}>
              <Payments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employees"
          element={
            <ProtectedRoute roles={["engineer"]}>
              <Employees />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute roles={["engineer"]}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Customer */}
        <Route path="/engineers" element={<EngineersList />} />
        <Route path="/engineers/:id" element={<EngineerDetail />} />

        {/* Admin */}
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute roles={["admin"]}>
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/engineers"
          element={
            <ProtectedRoute roles={["admin"]}>
              <EngineersAdmin />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-2xl">
              404 - Page Not Found
            </div>
          }
        />

      </Routes>
    </Suspense>
  );
};

export default AppRoutes;