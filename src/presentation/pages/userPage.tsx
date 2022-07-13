import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import Box from "@mui/material/Box";
import { useAppContext } from "../shared/contexts";
import PersonIcon from '@mui/icons-material/Person';
import Assets from "./../shared/assets";

const cards = [1];

const cardsStats = [1, 2, 3, 4, 5];

export const UserPage = () => {
    const appContext = useAppContext();

    return (
        <Box>
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
                                color: "primary.dark" 
                            }}
                            />
                        </div>
                    </div>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h4" component="h2" align="center" color="primary.main">
                            {appContext?.user?.name}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}