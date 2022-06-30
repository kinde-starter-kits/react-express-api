import { Navigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

// A wrapper for React Router's `<Route>` that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children }) {
  const { isAuthenticated, isLoading } = useKindeAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
}

export { PrivateRoute };
