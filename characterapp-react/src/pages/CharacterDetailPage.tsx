import { useEffect, useState} from "react"
import { useParams } from "react-router";
import Character from "../models/Character";
import Error from "../components/Error";

import { getCharacterById } from "../services/character-api-service";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import CharacterProfile from "../components/CharacterProfile";
import CharacterItemCard from "../components/CharacterItemCard";

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
                    console.log(body)
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
                    <div className="row">
                        <div className="col-4">
                            <CharacterProfile {...currentCharacter}></CharacterProfile>
                        </div>
                        {
                            currentCharacter.characterItems &&
                            <div className="col-6">
                            {currentCharacter.characterItems.map(item => <CharacterItemCard key={item.id} {...item}/>)}
                            </div>
                        }
                    </div>
                     :
                    <NotFound />               
                )
            )
        }
        
    </>
}