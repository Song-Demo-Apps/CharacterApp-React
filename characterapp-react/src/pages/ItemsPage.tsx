import { useEffect, useState } from "react"
import Loading from "../components/Loading";
import ItemCard from "../components/ItemCard";
import Error from "../components/Error";
import Item from "../models/Item";
import { getAllItems } from "../services/character-api-service";
import { Box, Typography } from "@mui/material";

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
        <Typography variant="h4" sx={{my: 3}}>Browse All Items</Typography>
        {
            error ? <Error />: 
            (items ? 
                <Box sx={{display: 'flex', flexWrap: 'wrap'}} >
                    {items.map(c => <ItemCard key={c.id} {...c}/>)}
                </Box>
                : <Loading/>)
        }
    </>
}