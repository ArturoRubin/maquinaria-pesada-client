
import "./Product.css"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import productService from "../../services/product.service";
import { Link, useNavigate } from "react-router-dom";


function Product({ product }) {
    const { user } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const deleteProduct = () => {
        productService
            .deleteOne(product.id)
            .then((response) => {
                // If the POST request is successful redirect to the login page
                window.location.reload();
            })
            .catch((error) => {
                // If the request resolves with an error, set the error message in the state
                //const errorDescription = error.response.data.message;
                // setErrorMessage(errorDescription);
            });
    }

    const header = (
        <img alt="Card" src={product.imagen} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            {user?.email == product.user && (<Button onClick={deleteProduct} icon="pi  pi-trash" severity="danger" />)}
            {user?.email == product.user && (<Button icon="pi pi-cog" />)} <Button onClick={() => setVisible(true)} text raised label="Contactar" />
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
                <Dialog header="Contacto" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    <p className="m-0">
                        {product.user}
                    </p>
                </Dialog>
            </div>
        </div>
    )
}

export default Product;