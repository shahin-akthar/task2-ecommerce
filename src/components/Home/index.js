import {Component} from 'react'
import Header from "../Header";
import ProductCard from '../ProductCard'
import './index.css'

class Home extends Component {
    state = {productsList: []}

    componentDidMount() {
        this.getProducts()
      }
    
      getProducts = async () => {
        const url = 'https://fakestoreapi.com/products'
        const options = {
            method: 'GET'
        }
        const response = await fetch(url, options)
        if (response.ok) {
            const fetchedData = await response.json()
            this.setState({productsList: fetchedData})
        } else {
            console.log("error")
        }
      }

    render(){
        const {productsList} = this.state
        return (
            <>
              <Header/>
              <div className='home-container'>
                <h1>All Products</h1>
                <ul className='products-list'>
                    {productsList.map(each => {
                        return <ProductCard data={each} key={each.id}/>
                    })}
                </ul>
            </div>
            </>
        )
    }
}

export default Home