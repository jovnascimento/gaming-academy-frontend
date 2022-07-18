import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useAppContext } from "../shared/contexts";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import Assets from "./../shared/assets";
import { useEffect, useState } from "react";
import { CoursesWebClient } from "../../infra/webClients/CoursesWebClient";
import { Course } from "../../domain/models/Course";
import { Link } from "react-router-dom";

export const UserPage = () => {
  const appContext = useAppContext();

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if(!appContext.user) return

    const coursesWebClient = new CoursesWebClient();
    coursesWebClient.getCoursesByUser(appContext.user._id as string).then((course) => {
      setCourses(course.data || []);
    });
  }, [appContext.user]);

  return (
    <Box
      sx={{
        paddingBottom: 8,
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <Container sx={{ py: 8, maxWidth: "md" }}>
        {}
        <Card>
          <div style={{ position: "relative" }}>
            <CardMedia
              style={{
                height: "249px",
              }}
              component="img"
              src={Assets.BG}
              title="profileBG"
              alt="profileBG"
            />
            <div
              style={{
                position: "absolute",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <PersonIcon
                sx={{
                  height: "351px",
                  size: "small",
                  transform: "scale(8)",
                  color: "secondary.dark",
                }}
              />
            </div>
          </div>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h4" component="h2" align="center">
              {appContext?.user?.name}
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "0",
              }}
            >
              <AccessTimeIcon
                sx={{ margin: "0 auto", padding: "10px", fontSize: "50px" }}
              />
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                1 hora assistida
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "0",
              }}
            >
              <CastForEducationIcon
                sx={{ margin: "0 auto", padding: "10px", fontSize: "50px" }}
              />
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                {courses.length} curso{courses.length > 1 && "s"} inscrito
                {courses.length > 1 && "s"}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        marginTop={"3vw"}
        gutterBottom
      >
        Meus cursos
      </Typography>

      <Box
        sx={{
          backgroundColor: "background.paper",
          borderRadius: 1,
          color: "text.primary",
          align: "center",
        }}
      >
        <Container sx={{ py: 3 }}>
          <Grid container spacing={4}>
            {courses.map((course) => (
              <Grid item key={course._id} xs={12} sm={6} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "secondary.light",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={course.image}
                    height="200px"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" align="center">
                      {course.name}
                    </Typography>
                    <Typography variant="h6" component="h2" align="center">
                      {course.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      sx={{
                        borderWidth: 2,
                        borderStyle: "solid",
                        borderRadius: 50,
                        borderColor: "primary.main",
                        padding: "10px 20px",
                        margin: "0 auto 20px auto",
                      }}
                      component={Link}
                      to={`/course/${course._id}`}
                    >
                      Acessar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
