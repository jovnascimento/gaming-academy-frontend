import React, { useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, Modal } from "@mui/material";
import SignIn from "../signin/SignIn";
import { Link } from "react-router-dom";

import Assets from "../../assets";
import SignUp from "../signup/SignUp";
import { useAppContext } from "../../contexts";

export const Navbar = () => {
  const appContext = useAppContext();

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <SignIn onFormFinish={() => setLoginModalOpen(false)} />
        </Box>
      </Modal>

      <Modal
        open={signupModalOpen}
        onClose={() => setSignupModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <SignUp onFormFinish={() => setSignupModalOpen(false)} />
        </Box>
      </Modal>

      <AppBar position="static" color="secondary">
        <Toolbar>
          <Box
            style={{
              width: "100%",
              maxWidth: "1200px",
              display: "flex",
              margin: "0 auto",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Button component={Link} to="/">
                <img
                  src={Assets.Logo}
                  alt="Gaming Academy"
                  style={{ height: 42 }}
                />
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1 }} />

            {!appContext.token && (
              <>
                <Button
                  sx={{
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderRadius: 50,
                    borderColor: "primary.main",
                    padding: "5px 20px",
                  }}
                  onClick={() => setSignupModalOpen(true)}
                >
                  Registrar
                </Button>
                <Button
                  sx={{ marginLeft: "15px" }}
                  onClick={() => setLoginModalOpen(true)}
                >
                  Login
                </Button>
              </>
            )}

            {appContext.token && (
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  Bem-vindo, {appContext?.user?.name}
                </Box>

                {appContext.type === "instrutor" && (
                  <Button
                    sx={{ marginLeft: "15px" }}
                    component={Link} 
                    to="/add-course" 
                  >
                    Cadastrar Curso
                  </Button>
                )}

                <Button
                  sx={{ marginLeft: "15px" }}
                  onClick={() => {
                    appContext.setToken(null);
                    appContext.setUser(null);
                    appContext.setType(null);

                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    localStorage.removeItem("type");
                  }}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
