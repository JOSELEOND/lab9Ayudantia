import { useEffect, useState } from "react"
import './Card.css'

export const Card = () => {
    const [ product, setProduct ] = useState({});
    const productId = Math.floor(Math.random() * 100) + 1;
    
    useEffect (() => {
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {setProduct(data)})
    },[]);

    return(
        <div className="card">
            {product.images && product.images.length > 0 && (
                <img className="img" src={product.images[0]} alt="Product" />
            )}
            <p> {product.title} </p>
            <p> Descrption: {product.description} </p>
            <p>USD$:{product.price}</p>
            <p>{product.brand}</p>
        </div>
    )
};