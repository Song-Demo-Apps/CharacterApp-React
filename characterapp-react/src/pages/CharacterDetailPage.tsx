import { useEffect, useState} from "react"
import { useParams } from "react-router";
import Character from "../models/Character";
import Error from "../components/Error";
import { getCharacterById } from "../services/character-api-service";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import CharacterProfile from "../components/CharacterProfile";
import CharacterItemCard from "../components/CharacterItemCard";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


export default function CharacterDetailPage() {
    const params = useParams();
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const [currentCharacter, setCurrentCharacter] = useState<Character>();
    useEffect(() => {
        if(params.characterId) {
            getCharacterById(parseInt(params.characterId))
            .then(body => {
                if(body) {
                    setCurrentCharacter(body)
                }
                setLoading(false)
            })
            .catch((err): void => {
                console.error(`Error occured while trying to load character with id ${params.characterId}: ` + err)
                setError(true)
            })
        }
    }, [params])
    return <>
        {
            error ? 
            <Error /> : 
            (
                loading ?
                <Loading /> :
                (
                    currentCharacter ?
                    <Grid container spacing={1} sx={{mt:1}}>
                        <Grid xs={12} md={3}>
                                <CharacterProfile {...currentCharacter}></CharacterProfile>
                        </Grid>
                        <Grid xs={12} md={9}>
                            <Typography variant="h4">Inventory</Typography>
                            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                                {
                                    currentCharacter.characterItems &&
                                    currentCharacter.characterItems.map(item => <CharacterItemCard key={item.id} {...item}/>)
                                }
                                
                            </Box>
                        </Grid>
                    </Grid>
                     :
                    <NotFound />               
                )
            )
        }
        
    </>
}