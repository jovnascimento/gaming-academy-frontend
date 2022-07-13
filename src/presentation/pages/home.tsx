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
import Assets from "./../shared/assets";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Course } from "../../domain/models/Course";
import { CoursesWebClient } from "../../infra/webClients/CoursesWebClient";
import { Link } from "react-router-dom";

export const Home = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const coursesWebClient = new CoursesWebClient();
    coursesWebClient.getCourses().then((course) => {
      setCourses(course.data);
    });
  }, []);

  return (
    <Box>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="text.primary"
        marginTop={"3vw"}
        gutterBottom
      >
        <img src={Assets.Logo} alt="Gaming Academy" style={{ height: 80 }} />
        <br />A maior plataforma de cursos de games
      </Typography>
      <Typography
        variant="h4"
        align="center"
        marginRight="10vw"
        marginLeft="10vw"
      >
        A Gaming Academy é a plataforma n° 1 no mercado quando o assunto é o
        ensino de desenvolvimento de jogos
      </Typography>
      <Typography variant="h3" align="center" marginTop="5vw">
        Conheça nossos cursos
      </Typography>

      <Container sx={{ py: 8, maxWidth: "md" }}>
        <Grid container spacing={4}>
          {courses.map((course) => (
            <Grid item key={course._id} xs={12} sm={6} md={4}>
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
                  <Typography variant="body2" component="h2" align="center" marginTop="10px">
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
  );
};
