import { useEffect, useState } from "react"
import Loading from "../components/Loading";
import ItemCard from "../components/ItemCard";
import Error from "../components/Error";
import Item from "../models/Item";
import { getAllItems } from "../services/character-api-service";

export default function ItemsPage() {
    const [items, setItems] = useState<Item[]>();
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        getAllItems()
        .then(body => setItems(body))
        .catch((err): void => {
            console.error("Error occured while trying to load all characters: " + err)
            setError(true)
        })
    },[])

    return <>
        <h1 className="mb-4">Browse All Items</h1>
        {
            error ? <Error />: 
            (items ? 
                <div className="d-flex flex-wrap">
                    {items.map(c => <ItemCard key={c.id} {...c}/>)}
                </div>
                : <Loading/>)
        }
    </>
}