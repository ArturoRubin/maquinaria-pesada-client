import './Products.css';
import Product from '../Product/Product';
import { useState, useEffect } from "react";
import productService from "../../services/product.service";
import { Link, useNavigate } from "react-router-dom";
const productsDummy = [
    {
        id: 1,
        nombre: 'Product 1',
        precio: 1000,
        imagen: 'assets/img/excavadora.jpeg',
        descripcion: "lalalaalal",
    },
    {
        id: 2,
        nombre: 'Product 2',
        precio: 2000,
        imagen: 'assets/img/plancha.png',
        descripcion: "lalalaalal",
    },
    {
        id: 3,
        nombre: 'Product 3',
        precio: 3000,
        imagen: 'assets/img/compactadora.jpeg',
        descripcion: "lalalaalal",
    },
    {
        id: 4,
        nombre: 'Product 1',
        precio: 1000,
        imagen: 'assets/img/excavadora.jpeg',
        descripcion: "lalalaalal",
    },
    {
        id: 5,
        nombre: 'Product 2',
        precio: 2000,
        imagen: 'assets/img/plancha.png',
        descripcion: "lalalaalal",
    },
    {
        id: 6,
        nombre: 'Product 3',
        precio: 3000,
        imagen: 'assets/img/compactadora.jpeg',
        descripcion: "lalalaalal",
    },
    {
        id: 7,
        nombre: 'Product 1',
        precio: 1000,
        imagen: 'assets/img/excavadora.jpeg',
        descripcion: "lalalaalal",
    },
    {
        id: 8,
        nombre: 'Product 2',
        precio: 2000,
        imagen: 'assets/img/plancha.png',
        descripcion: "lalalaalal",
    },
    {
        id: 9,
        nombre: 'Product 3',
        precio: 3000,
        imagen: 'assets/img/compactadora.jpeg',
        descripcion: "lalalaalal",
    },
    {
        id: 10,
        nombre: 'Product 1',
        precio: 1000,
        imagen: 'assets/img/excavadora.jpeg',
        descripcion: "lalalaalal",
    },
    {
        id: 11,
        nombre: 'Product 2',
        precio: 2000,
        imagen: 'assets/img/plancha.png',
        descripcion: "lalalaalal",
    },
    {
        id: 12,
        nombre: 'Product 3',
        precio: 3000,
        imagen: 'assets/img/compactadora.jpeg',
        descripcion: "lalalaalal",
    },

];



function Products() {
    const [products, setProducts] = useState([]);
    const getProducts = products.map(
        product => <Product key={product.id} product={product} />
    );
    // We set this effect will run only once, after the initial render
    // by setting the empty dependency array - []

    

   useEffect(() => {
        productService
            .getAll()
            .then((response) => {
                let newProducts = response.data.map(product => {
                    return {
                        id: product._id,
                        nombre: product.nombre,
                        precio: product.precio,
                        imagen: product.imagen,
                        descripcion: product.descripcion,
                        user: product.user
                    }
                })
                console.log(newProducts);
                setProducts(newProducts);
                //return response;
                // If the POST request is successful redirect to the login page
                // navigate("/productos");  
            })
            .catch((error) => {
                // If the request resolves with an error, set the error message in the state
                //const errorDescription = error.response.data.message;
                // setErrorMessage(errorDescription);
            });
    }, []); 
    return (
        <div className='Products'>
            <div className='list'>
                {getProducts}
            </div>
        </div>
    );
}

export default Products;