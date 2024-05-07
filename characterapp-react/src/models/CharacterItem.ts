import Item from "./Item";

export default interface CharacterItem {
    id: number,
    characterId: number,
    item: Item,
    quantity: number
}