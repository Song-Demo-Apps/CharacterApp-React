import Item from "../models/Item";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ItemCard(props: Item) {
    return (
        <Card sx={{ width: 200, mb: 1, mr: 1}}>
            <CardMedia
            component="img"
            sx={{maxHeight: 150, objectFit: 'contain' }}
            image={props.imageUrl}
            alt={props.description}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.name}
            </Typography>
            {
                props.description &&
                <Typography variant="body1" color="text.primary">
                    {props.description}
                </Typography>
            }
            </CardContent>
        </Card>
    );
}