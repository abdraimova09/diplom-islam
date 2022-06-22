import { Backdrop, Button, CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import fire from "../fire";

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  function signUp(email, password, navigate) {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigate("/login"))
      .catch(err => setError(err.message));
  }

  function login(email, password, navigate) {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/my-groups"))
      .catch(err => setError(err.message));
  }

  function logOut() {
    fire.auth().signOut();
  }

  function authListener() {
    setLoading(true);
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser("");
      }
    });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }
  useEffect(authListener, []);
  if (loading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
        open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  return (
    <authContext.Provider value={{ currentUser, error, signUp, login, logOut }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
