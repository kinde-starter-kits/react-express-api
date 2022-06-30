import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const LogoutButton = () => {
  const { logout } = useKindeAuth();

  return (
    <button onClick={logout} type="button">
      Log out
    </button>
  );
};

export { LogoutButton };
