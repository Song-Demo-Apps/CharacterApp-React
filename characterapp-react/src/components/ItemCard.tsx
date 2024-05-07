import Item from "../models/Item";
import "./Card.css"
export default function ItemCard(props: Item) {
    return <>
    <div className="card item-card">
        <div className="card-body">
            <img src={props.imageUrl} className="card-img-top" />
            <h6 className="card-subtitle mb-2 text-body-secondary">Cost: {props.value}</h6>
            <h5 className="card-title">{props.name}</h5>
            {
                props.description && <p className="card-text">{props.description}</p>
            }
            </div>
    </div>
    </>
}