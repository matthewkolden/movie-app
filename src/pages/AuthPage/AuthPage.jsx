import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
// import styles from "./AuthPage.module.scss";
// import Logo from "../../components/Logo/Logo";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <div>
        {/* <Logo /> */}
        <h3 onClick={() => setShowLogin(!showLogin)}>
          console.log('showLogin before:', showLogin)
          {showLogin ? "SIGN UP" : "LOG IN"}
        </h3>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
