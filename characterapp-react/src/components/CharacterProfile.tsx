import { Typography, List, ListItem, Box} from "@mui/material";
import Character from "../models/Character";

export default function CharacterProfile(props: Character) {
    return <>
        <Box sx={{maxWidth: 250}}>
            <img style={{maxWidth: 'inherit'}} src="https://imgs.search.brave.com/GrTMprW4fg05XTsfzacsNofnbaMJuXlbLIXZqUAn9vg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw"/>
        </Box>
        <Typography variant="h4" >{props.name}</Typography>
        <List>
            <ListItem>
                <Typography variant="body1" sx={{fontWeight: 600, mr: 1}}>Speices:</Typography><Typography variant="body1">{ props.characterSpecies?.name ?? "unknown species"}</Typography>
            </ListItem>
            <ListItem>
                <Typography variant="body1" sx={{fontWeight: 600, mr: 1}}>Birthday:</Typography><Typography variant="body1">{ props.doB?.toString() ?? "unknown" }</Typography>
            </ListItem>
            <ListItem>
                <Typography variant="body1" sx={{fontWeight: 600, mr: 1}}>Bio:</Typography><Typography variant="body1">{ props.bio ?? `${props.name} doesn't have any bio` }</Typography>
            </ListItem>
            <ListItem>
                <Typography variant="body1" sx={{fontWeight: 600, mr: 1}}>Money:</Typography><Typography variant="body1">{ props.money } Gold</Typography>
            </ListItem>
        </List>
    </>
}