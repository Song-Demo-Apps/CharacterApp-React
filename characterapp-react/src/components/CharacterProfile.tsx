import Character from "../models/Character";

export default function CharacterProfile(props: Character) {
    return <>
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
    </>
}