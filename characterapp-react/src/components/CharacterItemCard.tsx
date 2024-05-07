import CharacterItem from "../models/CharacterItem";
import "./CharacterItemCard.css"
export default function CharacterItemCard(props: CharacterItem) {
    return <>
    <div className="card item-card">
        <div className="card-body">
            <img src={props.item.imageUrl} className="card-img-top" />
            <h5 className="card-title">{props.item.name} x {props.quantity}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Value: {props.item.value}</h6>
            {
                props.item.description && <p className="card-text">{props.item.description}</p>
            }
            </div>
    </div>
    </>
}