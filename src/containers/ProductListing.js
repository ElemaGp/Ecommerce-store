import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";


const ProductListing = () => {
    const products = useSelector((state) => state); //i can access the "products" object in any component in this project as long as i add this line, thanks to the redux i created. i wrote "state.allProducts.product" because in the redux devtool, the "product" is inside the "allProducts".
    const dispatch = useDispatch(); //for dispatching the "fetchProducts" action where the fetch occurs.

      
      useEffect(() => {  // every time this page is loaded, this useEffect fires up the fetchProducts() action function, where the api fetch occurs.
        dispatch(fetchProducts()); //dispatching the "fetchProducts" action where the fetch occurs.
      }, []);
    console.log("Products: ", products);

    return(
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;