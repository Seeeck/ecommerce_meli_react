import React from "react";
import Producto from "./Producto";





const Products = ({ products }) => {

   
    const listProducts = products.map(product => {
        return (
            <Producto key={product.id} product={product}/>
        )
    })
    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-wrap justify-content-center"  >
                {listProducts}
            </div>

        </div>
    )
}

export default Products;