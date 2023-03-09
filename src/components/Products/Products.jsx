import './Products.css';
import Product from '../Product/Product';
import { useState, useEffect } from "react";
import productService from "../../services/product.service";
import { Link, useNavigate } from "react-router-dom";



function Products() {
    const [products, setProducts] = useState([]);
    const getProducts = products.map(
        product => <Product key={product.id} product={product} />
    );

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
                setProducts(newProducts);
            })
            .catch((error) => {
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
