import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useAppContext } from "../shared/contexts";

import { Course } from "../../domain/models/Course";
import { Lection } from "../../domain/models/Lection";
import { CoursesWebClient } from "../../infra/webClients/CoursesWebClient";

export const AddCourse = () => {
  const appContext = useAppContext();

  const [lectionCount, setLectionCount] = useState(1);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const course: Course = {
      instructor: appContext.user?._id ?? "",
      name: data.get("name")?.toString() ?? "",
      description: data.get("description")?.toString() ?? "",
      image: data.get("image")?.toString() ?? "",
      duration: parseInt(data.get("duration")?.toString() ?? "", 10),
    };

    const lections: Lection[] = [];
    for (let i = 0; i < lectionCount; i++) {
      lections.push({
        name: data.get(`lection-name-${i}`)?.toString() ?? "",
        description: data.get(`lection-description-${i}`)?.toString() ?? "",
        video: data.get(`lection-video-${i}`)?.toString() ?? "",
        duration: parseInt(
          data.get(`lection-duration-${i}`)?.toString() ?? "",
          10
        ),
      });
    }

    course.lections = lections;

    if (!course.name) {
      alert("Nome é obrigatório");
      return;
    }

    if (!course.description) {
      alert("Descrição é obrigatória");
      return;
    }

    if (!course.image) {
      alert("Imagem é obrigatória");
      return;
    }

    if (!course.image.startsWith("http")) {
      alert("Imagem precisa ser uma URL");
      return;
    }

    if (!course.duration) {
      alert("Duração é obrigatória");
      return;
    }

    if (isNaN(course.duration)) {
      alert("Duração deve ser um número");
      return;
    }

    if (!course.lections || course.lections.length === 0) {
      alert("Ao menos uma lição é obrigatória");
      return;
    }

    for (const lection of course.lections) {
      if (!lection.name) {
        alert("Nome da lição é obrigatório");
        return;
      }

      if (!lection.description) {
        alert("Descrição da lição é obrigatória");
        return;
      }

      if (!lection.video) {
        alert("Vídeo da lição é obrigatório");
        return;
      }

      if (!lection.video.startsWith("http")) {
        alert("Vídeo da lição precisa ser uma URL");
        return;
      }

      if (!lection.duration) {
        alert("Duração da lição é obrigatória");
        return;
      }

      if (isNaN(lection.duration)) {
        alert("Duração da lição deve ser um número");
        return;
      }
    }

    const coursesWebClient = new CoursesWebClient();
    const createResponse = await coursesWebClient.createCourse(course);

    if (!createResponse.status) {
      alert("Erro desconhecido ao criar curso");
      return;
    }

    alert("Curso criado com sucesso");

    window.location.href = "/";
  };

  return (
    <Box>
      <Box sx={{ width: "100%", maxWidth: "650px", margin: "0 auto" }}>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          align="center"
          color="primary.contrastText"
          marginTop="50px"
        >
          Cadastrar novo curso
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome do curso"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            name="description"
            label="Descrição do curso"
            id="description"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="image"
            label="URL da imagem do curso"
            id="image"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="duration"
            label="Duração em horas"
            type="number"
            id="duration"
          />

          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            color="primary.contrastText"
            marginTop="20px"
          >
            Aulas
          </Typography>

          {Array.from({ length: lectionCount }).map((_, index) => (
            <Box
              sx={{
                mt: 1,
                borderWidth: "2px",
                borderColor: "primary.main",
                borderStyle: "solid",
                borderRadius: "50px",
                padding: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              key={index}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="left"
                color="primary.contrastText"
                marginTop="10px"
              >
                Aula {index + 1}
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                name={`lection-name-${index}`}
                label="Nome da aula"
                id={`lection-name-${index}`}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                multiline
                name={`lection-description-${index}`}
                label="Descrição da aula"
                id={`lection-description-${index}`}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name={`lection-video-${index}`}
                label="URL do vídeo (Vímeo)"
                id={`lection-video-${index}`}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name={`lection-duration-${index}`}
                label="Duração da aula"
                type="number"
                id={`lection-duration-${index}`}
              />
            </Box>
          ))}

          <Button
            fullWidth
            variant="outlined"
            onClick={() => setLectionCount(lectionCount + 1)}
          >
            Adicionar nova aula
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar curso
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
