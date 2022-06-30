import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./pages/App/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <KindeProvider
      domain={process.env.REACT_APP_KINDE_DOMAIN}
      logoutUri={process.env.REACT_APP_KINDE_LOGOUT_URL}
      redirectUri={process.env.REACT_APP_KINDE_REDIRECT_URL}
    >
      <Router>
        <App />
      </Router>
    </KindeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
