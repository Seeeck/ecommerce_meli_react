import React from "react";
import { useCart } from "react-use-cart";
import toast, { Toaster } from 'react-hot-toast';
import SuccessToast from "./toasts/SuccessToast";
const Producto = ({ product }) => {
    const { addItem,items } = useCart()
    const agregarProductoAlCarrito = () => {
        
        if(items.length>=5){
            toast.error(`Solo se pueden tener maximo 5 productos en el carrito`)
        }else{
            console.log("PRICEEEEE",product.precio)
            addItem({
                "id":product.id,
                "name":product.nombre,
                "price":product.precio,
                "precio_formateado":product.precio_formateado,
                "img_src":product.img_src,
                "tipo":product.tipo
            })
            toast.success(`Se agrego el producto ${product.nombre}`)
        }
       
    }
    function currencyFormatter({ currency, value }) {
        const formatter = new Intl.NumberFormat('es-cl', {
            style: 'currency',
            minimumFractionDigits: 0,
            currency
        })
        return formatter.format(value)
    }
    return (
        <div key={product.id} key-producto={`${product.id}`} className="card me-4 mt-4" style={{ width: '260px' }} >
            {
                product.tipo === "online" && <img src={product.img_src} className="card-img-top" alt={product.nombre} />
            }
            {
                product.tipo === "local" && <img src={process.env.PUBLIC_URL + `/assets/img/notebooks/${product.img_src}`}
                    className="card-img-top" alt={product.nombre} />
            }
            <div className="d-flex flex-column card-body justify-content-center">
                <h5 className="card-title">{product.nombre}</h5>
                <h3 className="card-text">Precio: {currencyFormatter({
                                                currency: "CLP",
                                                value: product.precio
                                            })} </h3>
                <button onClick={agregarProductoAlCarrito} className="btn btn-primary ">Agregar al carrito</button>
            </div>
            <SuccessToast position="top-center"/>
        </div>
    )
}

export default Producto;