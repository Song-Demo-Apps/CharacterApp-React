import Character from "../models/Character";
import "./CharacterProfile.css";
export default function CharacterProfile(props: Character) {
    return <div>
        <img className="profile-img" src="https://imgs.search.brave.com/GrTMprW4fg05XTsfzacsNofnbaMJuXlbLIXZqUAn9vg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw"/>
        <h1>{props.name}</h1>
        <dl>
            <dt>Species</dt>
            <dd>{ props.characterSpecies?.name ?? "unknown species" }</dd>
            
            <dt>Birthday</dt>
            <dd> { props.doB?.toString() ?? "unknown" } </dd>
            
            <dt> Bio </dt>
            <dd>{ props.bio ?? `${props.name} doesn't have any bio` } </dd>

            <dt> Money </dt>
            <dd>{ props.money } Gold</dd>
        </dl>

    </div>
}