import useTitle from '../hooks/useTitle';
import { CartCard } from '../components';
import '../App.css';

const Cart = () => {
    useTitle("Cart");

    const products = [
        {"id": 1, "name": "Beats Studio Pro Wireless Headphones", price: "R1 500", "image": "https://www.digicape.co.za/image/cache/catalog/product/MQTP3AEA/MQTQ3-1000x1000.jpg"},
        {"id": 2, "name": "Sony WH-CH720N Noise Canceling Wireless Headphones", price: "R1 300", "image": "https://m.media-amazon.com/images/I/41tp0JPPlmL.jpg"},
    ]
    return ( 
        <main>
            <section className="cart">
                <h1>Cart Items: {products.length}</h1>
                {products.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))}
                
            </section>
        </main>
     );
}
 
export default Cart;