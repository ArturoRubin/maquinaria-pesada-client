import './Products.css';
import Product from '../Product/Product';
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

function Products(){
    const products = productsDummy.map(
        product => <Product key={product.id} product={product} />
    );
    return(
        <div className='Products'>
            <div className='list'>
                {products}
            </div>
        </div>
    );
}

export default Products;