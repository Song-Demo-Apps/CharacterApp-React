<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import {useNavigate } from "react-router-dom";
>>>>>>> e7c472fbfacf4d9d68057e62766645f125be51e5
import Character from "../models/Character";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CharacterCard(props: Character) {
    const navigate = useNavigate()
    function handleCharacterClick(id : number | undefined) {
        if(id) {
            navigate(`character/${props.id}`)
        }
    }
    return (
        <Card sx={{ width: 200, mb: 1, mr: 1}}>
        <CardActionArea onClick={() => handleCharacterClick(props.id)}>
            <CardMedia
            component="img"
            sx={{ maxHeight: 150 }}
            image="https://imgs.search.brave.com/GrTMprW4fg05XTsfzacsNofnbaMJuXlbLIXZqUAn9vg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw"
            alt="default empty avatar"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.characterSpecies?.name}
            </Typography>
            <Typography variant="body1" color="text.primary">
                {props.bio}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}