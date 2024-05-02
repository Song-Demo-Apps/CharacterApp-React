import { useEffect, useState } from "react"
import Character from "../models/Character";
import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";

export default function AllCharacterPage() {
    const [characters, setCharacters] = useState<Character[]>();

    useEffect(() => {
        fetch('http://localhost:5133/api/Character?offset=0&limit=100')
        .then((res)  => res.json())
        .then((body) => setCharacters(body))
    },[])

    return <>
        <h1 className="mb-4">All Characters</h1>
        {characters ? characters.map(c => <CharacterCard key={c.id} {...c}/>) : <Loading/>}
    </>
}