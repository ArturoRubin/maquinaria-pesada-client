import React, { useState, useEffect, useMemo } from "react";
import { useDropzone } from 'react-dropzone';
import './ProductForm.css'
import productService from "../../services/product.service";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";



import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';



const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};



const ProductForm = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState({});
  const { user } = useContext(AuthContext);


  const navigate = useNavigate();

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject } = useDropzone({
      accept: {
        'image/*': []
      },
      onDrop: files => {      //Convertir el formato de la imagen a base64
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          setImagen(Object.assign(files[0], {
            preview: URL.createObjectURL(files[0]),
            base64: reader.result
          }));
        }

      }
    });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  const thumbs =
    <div style={thumb}>
      <div style={thumbInner}>
        <img
          src={imagen.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(imagen.preview) }}
        />
      </div>
    </div>
    ;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { nombre, descripcion, precio };
    requestBody.imagen = imagen.base64;
    requestBody.user = user._id;
    console.log(requestBody);
    console.log(user);

    // Send a request to the server using axios

    /*const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {}) */


    // Or using a service
    productService
      .createOne(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/productos");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        //const errorDescription = error.response.data.message;
        // setErrorMessage(errorDescription);
      });
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => URL.revokeObjectURL(imagen.preview);
  }, []);

  return (
    <div className="ProductForm h-full ">
      <div className="form">
        <h2 className="mb-3">Crear Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="nombre">Nombre</label>
            <InputText className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="descripcion">Descripcion</label>
            <InputTextarea className="form-control" autoResize value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows={5} cols={30} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="precio">Precio</label>
            <InputNumber className="form-control" inputId="precio" value={precio} onValueChange={(e) => setPrecio(e.value)} mode="currency" currency="USD" locale="en-US" />
          </div>
          <div className="form-group">
            <section className="container">
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Arrastra o selecciona archivos</p>
              </div>
              {imagen.preview && (<aside style={thumbsContainer}>
                {thumbs}
              </aside>)}
            </section>
          </div>
          <div className="submit-button">
            <Button className="mt-3" label="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;