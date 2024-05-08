import { useEffect, useState } from "react"
import Character from "../models/Character";
import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";
import { getAllCharacters } from "../services/character-api-service";
import Error from "../components/Error";

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
        <h1 className="mb-4">All Characters</h1>
        {
            error ? <Error />: 
            (characters ? 
                <div className="d-flex flex-wrap">
                    {characters.map(c => <CharacterCard key={c.id} {...c}/>)}
                </div>
                : <Loading/>)
        }
    </>
}