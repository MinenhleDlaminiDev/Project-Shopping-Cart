import useTitle from '../hooks/useTitle';
import { ProductCard } from '../components';
import '../App.css';

const Home = () => {
    useTitle("Home");

    const products = [
        {"id": 1, "name": "Beats Studio Pro Wireless Headphones", price: "R1 500", "image": "https://www.digicape.co.za/image/cache/catalog/product/MQTP3AEA/MQTQ3-1000x1000.jpg"},
        {"id": 2, "name": "Sony WH-CH720N Noise Canceling Wireless Headphones", price: "R1 300", "image": "https://m.media-amazon.com/images/I/41tp0JPPlmL.jpg"},
        {"id": 3, "name": "Apple AirPods Max - Sky Blue", price: "R12 300", "image": "https://www.shopandship.co.za/cdn/shop/products/AirPodsMaxBlueNew_625x625.jpg?v=1676274870"},
        {"id": 4, "name": "Wantech P9 Max Bluetooth Headphones", price: "R150", "image": "https://media.takealot.com/covers_images/c7d1538892dd454ca37e39e6ff57fe20/s-pdpxl.file"}
    ]

    return ( 
    <main>
        <section className="products">
            { products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            )) }
        </section>
    </main> );
}
 
export default Home;