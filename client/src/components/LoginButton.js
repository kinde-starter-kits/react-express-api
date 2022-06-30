import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const LoginButton = () => {
  const { login } = useKindeAuth();

  return (
    <button onClick={login} type="button">
      Log in
    </button>
  );
};

export { LoginButton };
