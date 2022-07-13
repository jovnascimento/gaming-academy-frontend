import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { validateEmail } from "../../../../domain/validators/Email/EmailValidator";
import { UsersWebClient } from "../../../../infra/webClients/UsersWebClient";
import { useAppContext } from "../../contexts";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { InstructorsWebClient } from "../../../../infra/webClients/InstructorsWebClient";

function Copyright(props: any) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © GamingAcademy "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface SignInProps {
  onFormFinish: () => void;
}

export default function SignIn(props: SignInProps) {
  const { onFormFinish } = props;

  const appContext = useAppContext();

  const [userType, setUserType] = React.useState<string | null>(null);

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType((event.target as HTMLInputElement).value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formEmail = data.get("email")?.toString() ?? "";
    const formPassword = data.get("password")?.toString() ?? "";

    if (!userType) {
      alert("Selecione o tipo de usuário");
      return;
    }

    const emailValidated = validateEmail(formEmail);
    if (!emailValidated) {
      alert("E-mail inválido");
      return;
    }

    if (userType === "aluno") {
      const usersWebClient = new UsersWebClient();
      const loginResponse = await usersWebClient.login(formEmail, formPassword);

      if (!loginResponse.status) {
        alert("Usuário ou senha inválidos");
        return;
      }

      if (!loginResponse.data) {
        alert("Usuário ou senha inválidos");
        return;
      }

      localStorage.setItem("token", loginResponse.data.token);
      localStorage.setItem("user", JSON.stringify(loginResponse.data.user));
      localStorage.setItem("type", "aluno");

      appContext.setToken(loginResponse.data.token);
      appContext.setUser(loginResponse.data.user);
      appContext.setType("aluno");
    }

    if (userType === "instrutor") {
      const instructorsWebClient = new InstructorsWebClient();
      const loginResponse = await instructorsWebClient.login(
        formEmail,
        formPassword
      );

      if (!loginResponse.status) {
        alert("Usuário ou senha inválidos");
        return;
      }

      if (!loginResponse.data) {
        alert("Usuário ou senha inválidos");
        return;
      }

      localStorage.setItem("token", loginResponse.data.token);
      localStorage.setItem("user", JSON.stringify(loginResponse.data.user));
      localStorage.setItem("type", "instrutor");

      appContext.setToken(loginResponse.data.token);
      appContext.setUser(loginResponse.data.user);
      appContext.setType("instrutor");
    }

    onFormFinish();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box sx={{ margin: "30px 0 5px 0", width: "100%" }}>
          <FormLabel>Tipo de usuário</FormLabel>
          <RadioGroup
            row
            name="type"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <FormControlLabel value="aluno" control={<Radio />} label="Aluno" />
            <FormControlLabel
              value="instrutor"
              control={<Radio />}
              label="Instrutor"
            />
          </RadioGroup>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
