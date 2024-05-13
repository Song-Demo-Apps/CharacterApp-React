import { useNavigate } from "react-router-dom";
import Character from "../models/Character";
import './Card.css';

export default function CharacterCard(props: Character) {
    const navigate = useNavigate()
    function handleCharacterClick(id : number | undefined) {
        if(id) {
            navigate(`character/${props.id}`)
        }
    }
    
    return <>
    <div onClick={() => handleCharacterClick(props.id)} className="card character-card">
        <div className="card-body">
            <div className="card-image-container">
                <img src="https://imgs.search.brave.com/GrTMprW4fg05XTsfzacsNofnbaMJuXlbLIXZqUAn9vg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw"/>
            </div>
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{props.characterSpecies?.name}</h6>
            {props.bio && <p className="card-text">{props.bio}</p>}
        </div>
    </div>
    </>
}