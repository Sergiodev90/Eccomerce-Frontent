/*
* @param {Array} products;
*  @return sum total prices
*
*/

export const totalprice = (products) =>{
        return parseFloat( products.reduce((sum,product) => sum + product.price,0)).toFixed(2)
}