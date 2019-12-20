import React, { useState } from "react";
import ReactDOM from "react-dom";
import confirmSignUp from "./service";
import "./styles.css";

function App() {
  const [user, setUser] = useState({
    email: undefined,
    old_password: undefined,
    new_password: undefined
  });

  return (
    <>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Email"
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="old password"
          onChange={e => setUser({ ...user, old_password: e.target.value })}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="new password"
          onChange={e => setUser({ ...user, new_password: e.target.value })}
        />
        <br />
      </label>
      <br />
      <button
        type="submit"
        value="Confirm User"
        onClick={e => {
          console.log("click");
          confirmSignUp(user);
        }}
      >
        Confirm User
      </button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
