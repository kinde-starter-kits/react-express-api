import Nav from "./../components/Nav";
import { Outlet } from "react-router-dom";

function AppLayout({ children }) {
  return (
    <div className="">
      <header className="c-header">
        <div className="c-header__start">
          <a href="/">Kinde React Express</a>
        </div>
        <div className="c-header__end">
          <Nav />
        </div>
      </header>
      <main className="c-main">
        You are in
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
