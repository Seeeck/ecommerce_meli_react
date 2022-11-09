import React, { useEffect } from "react";
import { Cart, X } from "react-bootstrap-icons";
import { useCart } from 'react-use-cart';
import InputNumber from 'rc-input-number';
const Carrito = () => {
    const { items, emptyCart, removeItem, cartTotal,updateItemQuantity } = useCart()
    console.log("Carttotalas", cartTotal)
    function currencyFormatter({ currency, value }) {
        const formatter = new Intl.NumberFormat('es-cl', {
            style: 'currency',
            minimumFractionDigits: 0,
            currency
        })
        return formatter.format(value)
    }
    return (
        <div className="ms-4" >
            <button className='btn btn-success ' type="button" data-bs-toggle="modal" data-bs-target="#modalProductos" aria-expanded="false">

                <Cart size={40} />
            </button>



            <div class="modal fade modal-lg" id="modalProductos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Carrito</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body list-group">
                            {items.length == 0 &&
                                <div>
                                    <h2 style={{ color: "gray" }}>Carrito vacio</h2>
                                </div>
                            }
                            {items?.map(item => {
                                return (
                                    <div className="row">
                                        <div className="col-3 col-lg-2 d-flex flex-row justify-content-center align-items-center " >
                                            {item.tipo == "local" && <img className="img-fluid aling-self-center" src={process.env.PUBLIC_URL + `/assets/img/notebooks/${item.img_src}`} />}
                                            {item.tipo == "online" && <img className="img-fluid" src={item.img_src} />}

                                        </div>
                                        <div className="col-4 col-lg-3 d-flex flex-row justify-content-start align-items-center">

                                            <h6 >{item.name}</h6>
                                        </div>

                                        <div className="col-2 col-lg-3 d-flex flex-row justify-content-center align-items-center">
                                            <div class="input-group">
                                                <button onClick={() => {
                                                    if(item.quantity>1 ){
                                                        updateItemQuantity(item.id, item.quantity - 1)
                                                    }
                                               
                                                }} class="btn btn-outline-secondary" type="button">-</button>
                                                <input disabled class="form-control"  style={{ textAlign: "center" }} value={item.quantity} type="text"  aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
                                                <button onClick={() => {
                                                    updateItemQuantity(item.id, item.quantity + 1)
                                                }}
                                                    class="btn btn-outline-secondary" type="button">+</button>
                                            </div>
                                        </div>

                                        <div className="col-3 d-flex flex-row justify-content-center align-items-center">
                                            <h5>{currencyFormatter({
                                                currency: "CLP",
                                                value: item.price
                                            })}</h5>
                                        </div>
                                        <div className="col-1 col-lg-1 d-flex flex-row justify-content-center align-items-center">
                                            <button onClick={() => { removeItem(item.id) }} className="btn">
                                                <X size={30} />
                                            </button>
                                        </div>
                                        <hr style={{ borderTopColor: "#9F9F9F", borderRadius: "10px" }} />

                                    </div>
                                )
                            })}
                            {items.length > 0 &&
                                <div className="row">
                                    <div className="col-4">
                                        <h2>Total</h2>
                                    </div>
                                    <div>
                                        <h2>{currencyFormatter({
                                            currency: "CLP",
                                            value: cartTotal
                                        })}</h2>
                                    </div>
                                </div>
                            }
                        </div>
                        {items.length > 0 &&
                            <div class="modal-footer">
                                <button onClick={() => { emptyCart() }} type="button" class="btn btn-danger" >Limpiar carrito</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-success">Pasar por caja</button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito;