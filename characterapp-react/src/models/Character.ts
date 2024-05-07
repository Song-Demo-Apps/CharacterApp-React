import CharacterItem from "./CharacterItem"
import Species from "./Species"

export default interface Character {
    id : number | undefined,
    name : string,
    doB?: Date | string,
    age? : string
    bio?: string,
    money: number,
    characterSpecies?: Species,
    characterItems? : CharacterItem[]
}
