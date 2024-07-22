import React from "react";
import { CardItem } from "../../Components/CardItem";
import { ProductDetail } from "../../Components/ProductDetail";
import { api } from "../../Api";
import axios from "axios";

function Home(){
    const [items, setItems] = React.useState([]);


    React.useEffect(()=>{

        const fetchData = async() =>{
            try{
                const response = await axios.get(`${api}/products`)
                setItems(response.data)
            }catch(error){
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            
            <h1>Home</h1>
            <div className="grid gap-8 grid-cols-4 w-full max-w-screen-lg">
            {items?.map((item)=>(
                <CardItem key={item.id} item={item} />
            ))}
            </div>
            <ProductDetail/>
        </div>
    );
}

export {Home}