import { useHistory } from "react-router-dom";
import { auth } from "./firebase.js";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const loginButton = (event: any) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth: any) => {
        //logged in, redirect to homepage
        console.log(auth);
        history.push("/");
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  const registerButton = (event: any) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth: any) => {
        //logged in, redirect to homepage
        console.log(auth);
        history.push("/");
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  //<pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
  console.log(email + "" + password);
  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          ></input>
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          ></input>
          <button
            onClick={loginButton}
            type="submit"
            className="login__container__button"
          >
            Sign in
          </button>
        </form>
        <button onClick={registerButton}>Create account</button>
      </div>
    </div>
  );
};
