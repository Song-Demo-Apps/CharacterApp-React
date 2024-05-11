import CharacterItem from "../models/CharacterItem";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function CharacterItemCard(props: CharacterItem) {
    return <>
    <Card sx={{ width: 200, mb: 1, mr: 1}}>
        <CardMedia
        component="img"
        sx={{maxHeight: 150, objectFit: 'contain' }}
        image={props.item.imageUrl}
        alt={props.item.description}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {`${props.item.name} x ${props.quantity}`} 
        </Typography>
        {
            props.item.description &&
            <Typography variant="body1" color="text.primary">
                {props.item.description}
            </Typography>
        }
        </CardContent>
    </Card>
    </>
}