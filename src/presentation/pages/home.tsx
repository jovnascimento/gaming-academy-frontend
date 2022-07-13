import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import Assets from "./../shared/assets";
import Box from "@mui/material/Box";

const cards = [1, 2, 3, 4, 5, 6];

export const Home = () => {

    return (
        <Box>
            <Typography component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            marginTop={"3vw"}
            gutterBottom>
            <img
                src={Assets.Logo}
                alt="Gaming Academy"
                style={{ height: 80 }}
            />
                <br/>
                A maior plataforma de cursos de games
            </Typography>
            <Typography variant="h4"
            align="center"
            marginRight="10vw"
            marginLeft="10vw"
            >
                A Gaming Academy é a plataforma
                n° 1 no mercado quando o assunto
                é o ensino ao desenvolvimento de jogos
            </Typography>
            <Typography variant="h3"
            align="center"
            marginTop="5vw">
                Conheça nossos cursos
            </Typography>

            <Container sx={{ py: 8, maxWidth:"md"}}>
            {}
            <Grid container spacing={4}>
                {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'secondary.light' }}
                    >
                    <CardMedia
                        component="img"
                        image="https://source.unsplash.com/random" 
                        height="200px"
                        alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Nome do curso
                        </Typography>
                        <Typography>
                            Descrição do curso
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View</Button>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
                </Grid>
            </Container>
        </Box>
        
    )
}