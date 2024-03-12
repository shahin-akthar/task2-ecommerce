import {Component} from 'react'
import {Link} from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner';
import { FaStar } from "react-icons/fa";
import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductItemDetails extends Component {
    state = {
      productData: {},
      apiStatus: apiStatusConstants.initial,
    }

    componentDidMount() {
        this.getProductData()
      }

    getProductData = async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params

        this.setState({
            apiStatus: apiStatusConstants.inProgress,
        })

        const url = `https://fakestoreapi.com/products/${id}`
        const options = {
            method: 'GET'
        }
        
        const response = await fetch(url, options)

        if (response.ok) {
            const fetchedData = await response.json()
            this.setState({
                productData: fetchedData,
                apiStatus: apiStatusConstants.success,
              });
        } else {
            this.setState({
            apiStatus: apiStatusConstants.failure,
            });
        }
    }

    renderLoadingView = () => (
        <div className="loader-container" data-testid="loader">
          <ThreeDots color="#0b69ff" height={50} width={50} />
        </div>
      );

      renderFailureView = () => (
        <div className="error-container">
          <img
            alt="error view"
            src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
            className="error-image"
          />
          <h1 className="heading">Product Not Found</h1>
          <Link to="/">
            <button type="button" className="button">
              Continue Shopping
            </button>
          </Link>
        </div>
      )

      renderSuccessView = () => {
        const {productData} = this.state 
        console.log(productData)
        return (
            <div className='product'>
                <img src={productData.image} alt='product' className='image'/>
                <div className='product-container'>
                    <h1 className='product-heading'>{productData.title}</h1>
                    <p className='description'>{productData.description}</p>
                    <p className='category'>Category: <span className='span'>{productData.category}</span></p>
                    <div className="product-rating-container">
                    <p className="rating">{productData.rating.rate}</p>
                    <FaStar className='star'/>
                    </div>
                    <p className='category'>In stock:  <span  className='stock'>{productData.rating.count}</span></p>
                    <div className='price-container'>
                      <p className="price">$ {productData.price}/-</p>
                      <button className='cart'>Add to cart</button>
                    </div>
                </div>
            </div>
        )
      }
    

      renderProductDetails = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderSuccessView()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
      }
    
      render() {
        return (
          <>
            <Header />
            <div className="product-item-details-container">
              {this.renderProductDetails()}
            </div>
          </>
        )
      }
}

export default ProductItemDetails