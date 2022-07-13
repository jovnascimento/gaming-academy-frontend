import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import Box from "@mui/material/Box";
import { useAppContext } from "../shared/contexts";
import PersonIcon from '@mui/icons-material/Person';
import Assets from "./../shared/assets";

const cards = [1, 2, 3, 4];

export const UserPage = () => {
    const appContext = useAppContext();

    return (
        <Box sx={{
            paddingBottom: 8
        }}>
            <Container sx={{ py: 8, maxWidth: "md" }}>
                { }
                <Card>
                    <div style={{ position: "relative" }}>
                        <CardMedia style={{
                            height: "250px",
                        }}
                            component="img"
                            src={Assets.BG}
                            title="profileBG"
                            alt="profileBG"
                        />
                        <div style={{
                            position: "absolute",
                            top: 10,
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                        >
                            <PersonIcon sx={{
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
                            {appContext?.user?.name} Nome do usuário
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
            <Container>
                { }
                <Grid container spacing={0}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={6}>
                            <Card sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '0'
                            }}>
                                <PersonIcon sx={{ margin: '0 auto', padding: '10px'}}/>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2" align="center">
                                        {36} horas assistidas
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Typography component="h1"
                variant="h3"
                align="center"
                color="text.primary"
                marginTop={"3vw"}
                gutterBottom
            >
                Meus cursos
            </Typography>

            <Box sx={{
                backgroundColor: "background.paper",
                margin: 5,
                marginLeft: '10%',
                marginRight: '10%',
                borderRadius: 1,
                color: 'text.primary',
                align: 'center'
            }}>
                <Container sx={{ py: 3}}>
                    { }
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={6}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: 'secondary.light'
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/random"
                                        height="200px"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h5" component="h2" align="center">
                                            Nome do curso grande sobre programação
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small"
                                            sx={{
                                                borderWidth: 2,
                                                borderStyle: "solid",
                                                borderRadius: 50,
                                                borderColor: "primary.main",
                                                padding: "10px 20px",
                                                margin: '0 auto',
                                            }}>
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
    )
}