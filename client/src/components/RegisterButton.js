import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const RegisterButton = () => {
  const { register } = useKindeAuth();

  return (
    <button onClick={register} type="button">
      Register
    </button>
  );
};

export { RegisterButton };
