import { useEffect, useState} from "react"
import { useLocation } from "react-router";
import Character from "../models/Character";

export default function CharacterDetailPage() {
    const currentPath = useLocation();
    const [characterId, setCharacterId] = useState<number>(0);
    const [currentCharacter, setCurrentCharacter] = useState<Character>();
    useEffect(() => {
        setCharacterId(parseInt(currentPath.pathname.split('/')[2]))
    }, []);
    useEffect(() => {
        if(characterId) {
            fetch(`http://localhost:5133/api/Character/${characterId}`)
            .then(res => res.json())
            .then(json => setCurrentCharacter(json))
        }
    }, [characterId]);
    return <>
        <h1>{currentCharacter?.name}</h1>
    </>
}