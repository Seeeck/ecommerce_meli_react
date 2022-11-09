
import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import Products from './components/Products';
import getSearch from "../src/services/getSearch"

const App = () => {
    
    const productosLocales = [
        {
            id: 1,
            nombre: `Notebook 1`,
            img_src: 'notebook1.jpg',
            precio: 1349990,
            tipo: "local"

        },
        {
            id: 2,
            nombre: `Notebook 2`,
            img_src: 'notebook2.jpg',
            precio: 239990,
            tipo: "local"
        },
        {
            id: 3,
            nombre: `Notebook 3`,
            img_src: 'notebook3.jpg',
            precio: 529990,
            tipo: "local"
        },
        {
            id: 4,
            nombre: `Notebook 4`,
            img_src: 'notebook4.jpg',
            precio: 549000,
            tipo: "local"
        },
        {
            id: 5,
            nombre: `Notebook 5`,
            img_src: 'notebook5.jpg',
            precio: 229990,
            tipo: "local"
        },
        {
            id: 6,
            nombre: `Notebook 6`,
            img_src: 'notebook6.jpg',
            precio: 779990,
            tipo: "local"
        },
        {
            id: 7,
            nombre: `Notebook 7`,
            img_src: 'notebook7.jpg',
            precio: 239990,
            tipo: "local"
        },

    ]
    const [products, setProducts] = useState(productosLocales)
    const [inputSearch, setInputSearch] = useState("notebook")
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)
    const [tipoProducto, setTipoProducto] = useState("local")
    console.log(offset)
    console.log(tipoProducto)

  


    const cargarProductosEncontrados = (e, tipo) => {
        e.preventDefault()
        if (tipo === "buscar" & inputSearch === "notebook") {
            setOffset(0)
            setProducts(productosLocales)
            return
        } else if (tipo === "buscar") {
            setOffset(0)
        }

        if (tipo === "siguiente") {
            setOffset(offset + 12)
        }
        if (tipo === "anterior") {

            if (offset - 12 < 0) {
                setOffset(0)
            } else {
                setOffset(offset - 12)
            }

        }

        setLoading(true)
        getSearch(inputSearch, offset + 12).then(data => {

            setProducts(data.results.map(item => {
                return {
                    "id": item.id,
                    "nombre": item.title,
                    "img_src": item.thumbnail.replace('I.jpg', 'O.jpg'),
                    "precio": item.price,
                
                    "tipo": "online"
                }
            }))
            setLoading(false)
        })


    }

    return (
        <div className=' d-flex flex-column h-100' >

            <Nav setProducts={setProducts} inputSearch={inputSearch} setInputSearch={setInputSearch} cargarProductosEncontrados={cargarProductosEncontrados} />

            {loading ?
                <div class="row justify-content-center align-self-center align-items-center h-100" >
                    <div class="spinner-border text-warning " role="status" >

                    </div>
                </div>

                :
                products.length > 0 ?
                    <div className="d-flex flex-column">
                        <Products products={products} setProducts={setProducts} />
                        <nav className="align-self-center mt-4">
                            <ul className="pagination">
                                {offset > 12 && tipoProducto === "online" && <li onClick={e => {
                                    cargarProductosEncontrados(e, "anterior")
                                    setTipoProducto("online")
                                }} className="page-item"><button className="page-link" href="#">Anterior</button></li>}

                                {offset === 12 && tipoProducto === "online" && inputSearch === "notebook" && <li onClick={e => {
                                    setTipoProducto("local")
                                    setProducts(productosLocales)
                                }} className="page-item"><button className="page-link" >Anterior</button></li>}

                                {offset === 12 && tipoProducto === "online" && inputSearch  !== "notebook" && <li onClick={e => {
                                    cargarProductosEncontrados(e, "anterior")
                                    setTipoProducto("online")
                                }} className="page-item"><button className="page-link" >Anterior</button></li>}


                                <li onClick={e => {
                                    cargarProductosEncontrados(e, "siguiente")
                                    setTipoProducto("online")
                                }} className="page-item"><button className="page-link" href="#">Siguiente</button></li>
                            </ul>
                        </nav>
                    </div>
                    :

                    <div class="row justify-content-center align-self-center align-items-center h-100" >
                        <h2 style={{ color: "gray" }}>No existen productos </h2>
                    </div>

            }



        </div>
    )
}
export default App;
