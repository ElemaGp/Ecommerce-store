import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products); //i can access the "products" object in any component in this project as long as i add this line, thanks to the redux i created. i wrote "state.allProducts.product" because in the redux devtool, the "product" is inside the "allProducts".
    const renderList = products.map((product) => { //since i've fetched the "products" from the api in "productListing" component and put the data inside the "SetProduct" redux action which is connected to the productReducer and store, i"ve used the useSelector above to bring the "products" state into this component. Now i can map through the "products" and use the data as i wish. 
      const {id, title, image, price, category} = product;  //destructuring the properties of each product being mapped, so that i can use "id", "title", "image" etc below
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div> 
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        );
    });
    
    return <>{renderList}</>; //here is the jsx which "returns" the renderList variable above, which is the function that will be displayed on the browser
};

export default ProductComponent;