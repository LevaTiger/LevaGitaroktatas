import { Link } from 'react-router';
import './product-card.css'

const ProductCard=({ product })=>{



    const addToCart = (product) =>{

        const newItem = {
            orderName: product.name,
            orderPrice: product.price,
            orderImg: product.img
        }

        let storageOrder = localStorage.getItem('order');
        let orders = storageOrder ? JSON.parse(storageOrder) : [];

        orders.push(newItem);
        localStorage.setItem('order', JSON.stringify(orders));

    }

    return(
        <div className="card">
            <figure>
                <img src={product.img} alt={product.name} />
            </figure>
            <h4 className="card-title">{product.name}</h4>
            <p>Ár: {product.price} Ft </p>
            <div className="purchase-item">
                <button onClick={()=> addToCart(product)}>Kosárba</button>
                <Link>Részletek...</Link>
            </div>
        </div>
    )
}



export default ProductCard;