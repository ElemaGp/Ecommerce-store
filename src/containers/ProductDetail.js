import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product = useSelector((state) => state.product); //using the "useSelector" so i can access the product here. I wrote "state.product" here because in the "selectedProduct" action, the payload is "product" and more importantly, in the combinedReducer indexjs, i wrote "product": selectedProductReducer.
    const {image, title, price, category, description} = product; //destructuring the "product" object you just fetched so you can use eg "image", "title" instead of "product.image", "product.title".
    const {productId} = useParams(); //useParams gives the value of the dynamic part of the link that links to this productDetails (eg. `/product/${id}`). In this project, it is the "id".
    const dispatch = useDispatch(); //for dispatching the fetched value of the "product" into the redux "selectedProduct" Action
    console.log(product); //Since "productId" is equal to the useParam, it basically represents the dynamic part of the url which leads here, which is the "1","2","3" etc (basically the id of the products).

    const fetchProductDetail = async() => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => {
          console.log("Err ", err);
        })
        dispatch(selectedProduct(response.data)); // Putting the fetched data into the "selectedProduct" action, from where the redux has access to it for state management.  "data" is the property of the response that carries the data you need, as its value
        };

        useEffect(() => {
            if (productId && productId !== "") fetchProductDetail(); //if we have a productId and the productId is not equal to an empty string, wthis useEffect calls the fetchProductDetail function.
        }, [productId]);

    return(
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                  <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image" src={image} />
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a className="ui teal tag label">${price}</a>
                            </h2>
                            <h3 className="ui brown block header">{category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add to Cart</div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            )}
          
        </div>
    );
};

export default ProductDetail;
           