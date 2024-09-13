import {useContext, useEffect} from "react";
import { ShoppingCartContext } from "../../context";
import { CardItem } from "../../Components/CardItem";
import { ProductDetail } from "../../Components/ProductDetail";


function Home(){
    const {items,SearchByTitle,setSearchByTitle,FiltereItems,currentPath,setCurrentPath} = useContext(ShoppingCartContext);
    let currentpathname = window.location.pathname;
    let currentpath = currentpathname.replace(/-/g, ' ')
    const renderView = () =>{
        const itemsToRender = SearchByTitle?.length > 0 
        ? FiltereItems
        : items
        if(itemsToRender?. length > 0){
            return itemsToRender.map(item =>(
                <CardItem key={item.id} item={item} />
            ));
        }else{
            return <p>No results for search</p>  
        }
    }

    useEffect(()=>{
        setCurrentPath(currentpath)

    },[currentpath])

    console.log(typeof(currentPath), currentPath)
    return (
        <div>
            <div className="flex justify-center">
            <div className="flex items-center justify-center realtive w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive products</h1>
            </div>
            <input type="text" placeholder="Search a product"
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                onChange={(event) => setSearchByTitle(event.target.value)}
            />
            </div>
            <div className="grid gap-8 grid-cols-4 w-full max-w-screen-lg">
                {renderView()}
            </div>
            <ProductDetail/>
        </div>
    );
}

export {Home}