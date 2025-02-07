import axios from "axios";

class ProductsServices {
  static getAllProducts = () => axios.get("/products");
  static getSingleProduct = (id) => axios.get(`/products/${id}`);
}

export default ProductsServices;
