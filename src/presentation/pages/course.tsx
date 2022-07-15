import {
  Avatar,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Course } from "../../domain/models/Course";
import { CoursesWebClient } from "../../infra/webClients/CoursesWebClient";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Instructor } from "../../domain/models/Instructor";
import Vimeo from "@u-wave/react-vimeo";
import { useAppContext } from "../shared/contexts"
import SignUp from "../shared/components/signup/SignUp";

export const CoursePage = () => {
  const { id } = useParams();
  const appContext = useAppContext();

  const [course, setCourse] = useState<Course>();
  const [subscripted, setSubscripted] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  useEffect(() => {
    const run = async () => {
      const coursesWebClient = new CoursesWebClient();
      const getResponse = await coursesWebClient.getCourse(id as string);

      if (!getResponse.status) {
        alert("Id do curso inexistente");
        window.location.href = "/";
        return;
      }

      setCourse(getResponse.data);
    };

    if (id) {
      run();
    } else {
      alert("Id do curso não especificado");
      window.location.href = "/";
      return;
    }
  }, [id]);

  if (!course) {
    return null;
  }

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 340,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const modalStyleSignup = {
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
        open={activeVideoModal !== null}
        onClose={() => setActiveVideoModal(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Vimeo video={activeVideoModal as string} autoplay responsive />
        </Box>
      </Modal>

      <Modal
        open={signupModalOpen}
        onClose={() => setSignupModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyleSignup}>
          <SignUp onFormFinish={() => setSignupModalOpen(false)} />
        </Box>
      </Modal>

      <Box
        sx={{
          paddingBottom: 8,
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          align="center"
          color="primary.contrastText"
          marginTop="50px"
        >
          {course.name}
        </Typography>

        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          align="center"
          color="primary.contrastText"
        >
          {course.description}
        </Typography>

        {!appContext.token && (
          <>
            <Button
              variant={subscripted ? "outlined" : "contained"}
              color="primary"
              size="large"
              sx={{ margin: "15px auto 50px auto", display: "block" }}
              onClick={() => setSignupModalOpen(true)}
            >
              Inscrever-se
            </Button>
          </>
        )}

        {appContext.token && (
          <>
            <Button
              variant={subscripted ? "outlined" : "contained"}
              color="primary"
              size="large"
              sx={{ margin: "15px auto 50px auto", display: "block" }}
              onClick={() => {
                setSubscripted(true);
              }}
            >
              {subscripted ? "Inscrito" : "Inscrever-se"}
            </Button>
          </>
        )}

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              align="center"
              color="primary.contrastText"
            >
              Lições
            </Typography>

            <Box
              sx={{
                maxWidth: "500px",
                width: "100%",
                margin: "0 auto",
                backgroundColor: "secondary.light",
              }}
            >
              <List>
                {course?.lections?.map((lection) => (
                  <ListItem
                    secondaryAction={
                      subscripted ? (
                        <IconButton
                          size="large"
                          edge="end"
                          onClick={() => setActiveVideoModal(lection.video)}
                        >
                          <PlayArrowIcon
                            style={{ color: "#fff", fontSize: "40px" }}
                          />
                        </IconButton>
                      ) : null
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <OndemandVideoIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={lection.name}
                      secondary={lection.description}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              align="center"
              color="primary.contrastText"
            >
              Instrutor
            </Typography>

            <Box
              sx={{
                maxWidth: "500px",
                width: "100%",
                margin: "0 auto",
                padding: "25px 0",
                backgroundColor: "secondary.light",
              }}
            >
              <img
                src={(course?.instructor as Instructor).avatar}
                alt={(course?.instructor as Instructor).name}
                style={{
                  width: "80px",
                  height: "auto",
                  borderRadius: "50%",
                  display: "block",
                  margin: "0 auto 20px auto",
                }}
              />

              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
                color="primary.contrastText"
              >
                {(course?.instructor as Instructor)?.name}
              </Typography>

              <Typography
                gutterBottom
                variant="body1"
                component="p"
                align="center"
                color="primary.contrastText"
              >
                {(course?.instructor as Instructor)?.bio}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
