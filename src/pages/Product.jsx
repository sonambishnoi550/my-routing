import { Link } from "react-router-dom";

const Product = () => (
    <>
        <h1>Products</h1>
        <ul>
            <li><Link to="/product/101">Product 101</Link></li>
            <li><Link to="/product/202">Product 202</Link></li>
        </ul>
    </>
);
export default Product;
