
import "./Product.css"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function Product({ product }) {
    const header = (
        <img alt="Card" src={product.imagen} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button text raised label="Contactar" />
        </div>
    );

    return (
        <div className="Product">
            <div className="card flex justify-content-center ">
                <Card title={product.nombre} footer={footer} header={header} className="md:w-25rem">
                    <p className="m-0">
                        {product.descripcion}
                    </p>
                    <div className="flex justify-content-end">
                        <span>{product.precio}</span>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Product;