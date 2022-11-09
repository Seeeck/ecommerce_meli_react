import React from 'react';
import ImageMercadoLibre from "../assets/img/mercado-libre-logo.png"
import Carrito from './Carrito';



const Nav = ({ setProducts, inputSearch, setInputSearch, cargarProductosEncontrados }) => {

    return (
        <nav className="navbar " style={{ backgroundColor: '#fff159' }}>
            <div className="container-fluid">
                <div className='d-flex flex-row'>
                    <img src={ImageMercadoLibre} alt="Logo" width={200} className="d-inline-block align-text-top" />
                    <h2 className='ms-4' style={{ color: '#002f6d' }}>Ecommerce App</h2>
                </div>
                <div className='d-flex flex-row mt-4'>
                    <form className="d-flex ms-4" role="search">
                        <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Ingrese un producto" aria-label="Search" />
                        <button onClick={(e) => { cargarProductosEncontrados(e, "buscar") }} className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                  <Carrito/>
                </div>

            </div>
        </nav>
    )

}

export default Nav;