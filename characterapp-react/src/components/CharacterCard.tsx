import { Link } from "react-router-dom";
import Character from "../models/Character";
import './CharacterCard.css';

export default function CharacterCard(props: Character) {
    return <>
    <div className="card character-card">
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{props.characterSpecies?.name}</h6>
            <p className="card-text">Money: {props.money}</p>
            {props.bio && <p className="card-text">{props.bio}</p>}
            <Link to={`/character/${props.id}`} className="btn btn-primary">Full Profile</Link>
        </div>
    </div>
    </>
}