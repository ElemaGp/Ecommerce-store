import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";


const ProductListing = () => {
    const products = useSelector((state) => state); //i can access the "products" object in any component in this project as long as i add this line, thanks to the redux i created. i wrote "state.allProducts.product" because in the redux devtool, the "product" is inside the "allProducts".
    const dispatch = useDispatch(); //for dispatching the fectched api data into the SetProduct action function, which is then used in the reducer, and then the "product" is stored in our redux store.

      const fetchProducts = async () => {  //fetching all products from the fakestore api
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data)); //dispatching the "setProducts" redux Action function with the data you just fetched inside it as argument (this means that the fetched data becomes the payload in the setProducts redux Action).   i'm calling the data "response.data" because in the fakestoreapi, the "data" property is what contains the array of the data we want as its value.
      };
      useEffect(() => {
        fetchProducts();
      }, []);
    console.log("Products: ", products);
    return(
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;