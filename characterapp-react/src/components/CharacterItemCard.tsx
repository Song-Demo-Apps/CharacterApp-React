import CharacterItem from "../models/CharacterItem";
import "./Card.css"
export default function CharacterItemCard(props: CharacterItem) {
    return <>
    <div className="card item-card">
        <div className="card-body">
            <div className="card-image-container">
                <img src={props.item.imageUrl} />
            </div>
            <h5 className="card-title">{props.item.name} x {props.quantity}</h5>
            {
                props.item.description && <p className="card-text">{props.item.description}</p>
            }
            </div>
    </div>
    </>
}