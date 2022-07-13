import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { UsersWebClient } from "../../../../infra/webClients/UsersWebClient";
import { validateEmail } from "../../../../domain/validators/Email/EmailValidator";
import { validatePassword } from "../../../../domain/validators/Password/PasswordValidator";

function Copyright(props: any) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © GamingAcademy "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface SignUpProps {
  onFormFinish: () => void;
}

export default function SignUp(props: SignUpProps) {
  const { onFormFinish } = props;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formName = data.get("name")?.toString() ?? "";
    const formEmail = data.get("email")?.toString() ?? "";
    const formPassword = data.get("password")?.toString() ?? "";
    const formConfirmPassword = data.get("confirmPassword")?.toString() ?? "";

    if (!formName) {
      alert("Nome é obrigatório");
      return;
    }

    const emailValidated = validateEmail(formEmail);
    if (!emailValidated) {
      alert("E-mail inválido");
      return;
    }

    const passwordValidated = validatePassword(formName, formPassword);
    if (passwordValidated === "invalidLength") {
      alert("Senha deve conter entre 5 e 20 caracteres");
      return;
    }

    if (passwordValidated === "invalidSequence") {
      alert("Senha não deve conter uma sequencia de mais de três números");
      return;
    }

    if (passwordValidated === "invalidSpecialCharacter") {
      alert("Senha deve conter caracteres especiais");
      return;
    }

    if (passwordValidated === "invalidName") {
      alert("Senha não deve conter seu nome");
      return;
    }

    const passwordEqualityValidated = formPassword === formConfirmPassword;
    if (!passwordEqualityValidated) {
      alert("Senhas não conferem");
      return;
    }

    const usersWebClient = new UsersWebClient();
    const registrationResponse = await usersWebClient.registration({
      name: formName,
      email: formEmail,
      password: formPassword,
    });

    if (!registrationResponse.status) {
      alert("Usuário já existe");
      return;
    }

    alert("Usuário cadastrado com sucesso");
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
          Crie sua conta
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome Completo"
            name="name"
            autoComplete="name"
            autoFocus
          />
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirme sua senha"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Criar conta
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
