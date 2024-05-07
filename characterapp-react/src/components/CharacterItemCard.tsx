import CharacterItem from "../models/CharacterItem";
import "./Card.css"
export default function CharacterItemCard(props: CharacterItem) {
    return <>
    <div className="card item-card">
        <div className="card-body">
            <img src={props.item.imageUrl} className="card-img-top" />
            <h5 className="card-title">{props.item.name} x {props.quantity}</h5>
            {
                props.item.description && <p className="card-text">{props.item.description}</p>
            }
            </div>
    </div>
    </>
}