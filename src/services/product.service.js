import axios from 'axios';

class ProductService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/examples
  createOne = async (requestBody) => {
    return this.api.post('/api/products', requestBody);
  }

  // GET /api/examples
  getAll = async () => {
    return this.api.get('/api/products');
  }

  // GET /api/examples/:id
  getOne = async (id) => {
    return this.api.get(`/api/products/${id}`);
  }

  // PUT /api/examples/:id
  updateOne = async (id, requestBody) => {
    return this.api.put(`/api/products/${id}`, requestBody);
  }

  // DELETE /api/examples/:id
  deleteOne = async (id) => {
    return this.api.delete(`/api/products/${id}`);
  } 


}

// Create one instance of the service
const productService = new ProductService();

export default productService;