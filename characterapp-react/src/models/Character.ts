import Speices from "./Speices"

export default interface Character {
    id : number | undefined,
    name : string,
    doB?: Date | string,
    bio?: string,
    money: number,
    characterSpeices?: Speices,
    characterItems? : []
}

export interface CharacterItem {
    id: number,
    characterId: number,
    item: Item
}

export interface Item {
    id: number,
    name: string,
    description? : string,
    
}