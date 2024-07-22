import { XMarkIcon } from "@heroicons/react/24/solid";




const OrderCard  = (props) =>{
    const {id,title, imageURL, price, DeteleteOrderCard } = props
    let renderXMarkIcon

    if(DeteleteOrderCard){
        renderXMarkIcon =  <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => DeteleteOrderCard(id)}></XMarkIcon>
         
    }
    return(
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageURL} alt={title}/>
                </figure>
                <p className="text-sm font-light">{title}{id}</p>
            </div>
            <div className="flex items-center gap-2">
            <p className="text-lg font-medium">{price}</p>
            {renderXMarkIcon}
        </div>

        </div>

    );
}


export {OrderCard}