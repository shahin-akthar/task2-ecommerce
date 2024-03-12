import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import './index.css'

const ProductCard = ({data}) => {
    const {title, image, rating, price, id} = data

    return (
        <li className="product-item">
            <Link to={`/products/${id}`} className="link-item">
                <img src={image} alt="product" className="thumbnail" />
                <h1 className="title">{title}</h1>
                <div className="product-details">
                <p className="price">$ {price}/-</p>
                <div className="rating-container">
                    <p className="rating">{rating.rate}</p>
                    <FaStar className='star'/>
                </div>
                </div>
            </Link>
    </li>
    )
}

export default ProductCard