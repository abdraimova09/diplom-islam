import React, { useContext, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { signUp, error } = useContext(authContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleValues() {
    if (!email || !password) {
      alert("заполните поля!");
      return;
    }
    signUp(email, password, navigate);
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"70vh"}>
      <Typography variant="h4" component="h2">
        Регистрация
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}

      <TextField
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: "40%", margin: "10px" }}
        label="Email"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: "40%", margin: "10px" }}
        label="Пароль"
        variant="outlined"
        type={"password"}
      />
      <Button
        variant="contained"
        style={{ width: "40%", margin: "10px" }}
        onClick={handleValues}>
        Зарегистроваться
      </Button>
      <Typography variant="p" component="h2">
        Уже есть аккаунт?
      </Typography>
      <Typography
        onClick={() => navigate("/login")}
        variant="p"
        color={"primary"}
        style={{ cursor: "pointer" }}
        component="h2">
        Войти
      </Typography>
    </Box>
  );
};

export default Register;
