import { useEffect, useState } from "react"
import Character from "../models/Character";
import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";
import { getAllCharacters } from "../services/character-api-service";
import Error from "../components/Error";
import { Box, Typography } from "@mui/material";

export default function AllCharacterPage() {
    const [characters, setCharacters] = useState<Character[]>();
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        getAllCharacters()
        .then(body => setCharacters(body))
        .catch((err): void => {
            console.error("Error occured while trying to load all characters: " + err)
            setError(true)
        })
    },[])
    return <>
        <Typography variant="h4" sx={{my: 3}}>All Characters</Typography>
        {
            error ? <Error />: 
            (characters ? 
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {characters.map(c => <CharacterCard key={c.id} {...c}/>)}
                </Box>
                : <Loading/>)
        }
    </>
}