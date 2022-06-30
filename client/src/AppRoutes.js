import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Landing from "./pages/Landing/Landing";
import AppLayout from "./layouts/AppLayout";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
