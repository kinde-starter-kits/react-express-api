import { LoginButton } from "../../components/LoginButton";
import { RegisterButton } from "../../components/RegisterButton";

function Landing() {
  return (
    <div className="">
      <header className="c-header">
        <div className="c-header__start">
          <a href="/">Kinde React Express</a>
        </div>
        <div className="c-header__end">
          <LoginButton />
          <RegisterButton />
        </div>
      </header>
      <main className="c-main">You are logged out.</main>
    </div>
  );
}

export default Landing;
