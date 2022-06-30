import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function Profile() {
  const { user } = useKindeAuth();

  return (
    <>
      <h2>Profile</h2>

      <p>Hi {user.first_name}!</p>
    </>
  );
}
