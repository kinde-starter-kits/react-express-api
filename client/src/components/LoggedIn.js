import { useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function LoggedIn() {
  const { user, logout, getToken } = useKindeAuth();
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const accessToken = await getToken();
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/books`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const { data } = await res.json();
      setBooks(data.books);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div className="profile-blob">
            <div className="avatar">
              {user.first_name[0]}
              {user.first_name[1]}
            </div>
            <div>
              <p className="text-heading-2">
                {user.first_name} {user.last_name}
              </p>
              <button className="text-subtle" onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="card start-hero">
            <p className="text-body-2 start-hero-intro">Woohoo!</p>
            <p className="text-display-2">
              Your authentication is all sorted.
              <br />
              Build the important stuff.
            </p>
          </div>
          <section className="next-steps-section">
            <h2 className="text-heading-1">Next steps for you</h2>
            <button className="btn btn-dark" type="button" onClick={fetchBooks}>
              Fetch books
            </button>
            <ul>
              {books
                ? books.map((item) => <li key={item.id}>{item.title}</li>)
                : null}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <strong className="text-heading-2">KindeAuth</strong>
          <p className="footer-tagline text-body-3">
            Visit our{" "}
            <a className="link" href="https://kinde.com/docs">
              help center
            </a>
          </p>

          <small className="text-subtle">
            © 2022 KindeAuth, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </>
  );
}
