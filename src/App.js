import React, { useEffect, useState } from 'react';
import AllProducts from './components/Products/AllProducts';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/Checkout/Checkout';
import Searchbar from './components/Searchbar/Searchbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const carts = [];
const allProducts = [
    { id: 1, brand: 'Puma', name: 'X Shoes(Puma)', description: 'Running Shoes', price: 50, image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg?crop=1xw:1xh;center,top&resize=480:*' },
    { id: 2, brand: 'MI', name: 'Xiaomi', description: 'Phone with difference(MI)', price: 150, image: 'https://media.wired.com/photos/5f23168c558da0380aa8e37f/master/w_1600%2Cc_limit/Gear-Google-Pixel-4A-front-and-back-angle-SOURCE-Google.jpg' },
    { id: 3, brand: 'Iphone', name: 'Tablets', description: 'Big screens makes sense(Iphone)', price: 40, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-202009_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1599066778000' },
    { id: 4, brand: 'MI', name: 'Y Mobile', description: 'Low range mobiles(MI)', price: 30, image: 'https://images-na.ssl-images-amazon.com/images/I/41sGASjc4-L.jpg' },
    { id: 5, brand: 'Peter England', name: 'TCS', description: 'Man Power', price: 60, image: 'https://media.wired.com/photos/5f23168c558da0380aa8e37f/master/w_1600%2Cc_limit/Gear-Google-Pixel-4A-front-and-back-angle-SOURCE-Google.jpg' },
    { id: 6, brand: 'MI', name: 'MI 10', description: 'Phone with Some Power(MI)', price: 60, image: 'https://i01.appmifile.com/webfile/globalimg/in/cms/D1301D76-E04D-EF09-6195-53229DE6D543.jpg' },
    { id: 7, brand: 'Iphone', name: 'IPhone X', description: 'Man Power(Iphone)', price: 60, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-gold?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1579299533651' },
    { id: 8, brand: 'Puma', name: 'Puma', description: 'Shoe Power(Puma)', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0O0sXEXM0qrSiZNTCvdbJdlMp23TG8rzGFA&usqp=CAU' },
    { id: 9, brand: 'Addidas', name: 'BLaze Shoe', description: 'Power and Comfortable(Addidas)', price: 60, image: 'https://media.wired.com/photos/5f23168c558da0380aa8e37f/master/w_1600%2Cc_limit/Gear-Google-Pixel-4A-front-and-back-angle-SOURCE-Google.jpg' },
    { id: 10, brand: 'Walkman', name: 'WalkMan', description: 'Man Power', price: 60, image: 'https://media.npr.org/assets/img/2010/10/25/walkman-79_wide-2a19da8e3a11df2d498803fbadc79df54c9ef81f-s800-c85.jpg' },
    { id: 11, brand: 'GreenEarth', name: 'Green Erath', description: 'Man Power', price: 60, image: 'https://i02.appmifile.com/11_operator_in/23/04/2021/a3fa26aeb0a0e8ae38f38fb311d644e8.png' },
    { id: 12, brand: 'Bata', name: 'TCS', description: 'Man Power', price: 60, image: 'https://media.wired.com/photos/5f23168c558da0380aa8e37f/master/w_1600%2Cc_limit/Gear-Google-Pixel-4A-front-and-back-angle-SOURCE-Google.jpg' },
    { id: 13, brand: 'Addidas', name: 'Addidas Class', description: 'Power(Addidas)', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebsg-ue0S8iUTqsySp0hy9jjCCwxDBX0low&usqp=CAU' },
    { id: 14, brand: 'Puma', name: 'BoxModal', description: 'Man Power(Puma)', price: 60, image: 'https://media.wired.com/photos/5f23168c558da0380aa8e37f/master/w_1600%2Cc_limit/Gear-Google-Pixel-4A-front-and-back-angle-SOURCE-Google.jpg' },
    { id: 15, brand: 'Samsung', name: 'Samsung xs', description: 'Unlished Power(Samsung)', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdXp7Ubpt7TgOGnHkF9V5d_xQb35zVin_7g&usqp=CAU' },
    { id: 16, brand: 'Android', name: 'TCS', description: 'Man Power', price: 60, image: 'https://media.wired.com/photos/5f23168c558da0380aa8e37f/master/w_1600%2Cc_limit/Gear-Google-Pixel-4A-front-and-back-angle-SOURCE-Google.jpg' },
    { id: 17, brand: 'Bata', name: 'TCS', description: 'Man Power', price: 60, image: 'https://media.wired.com/photos/5f23168c558da0380aa8e37f/master/w_1600%2Cc_limit/Gear-Google-Pixel-4A-front-and-back-angle-SOURCE-Google.jpg' },
    { id: 18, brand: 'Puma', name: 'Shoe X', description: 'stylish Shoes(Puma)', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqqnE9pUlUh1Bp-O62cTFIN5uJp5_w9JeQg&usqp=CAU' },
    { id: 19, brand: 'Samsung', name: 'Node', description: 'Node to EdgePower(Samsung)', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMKRLmK4Zqh9QxtF7aoXKyCxmDRZFZCOHfg&usqp=CAU' }
];

function App() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(allProducts);
    const [data, setData] = useState('');

    const fetchProducts = async () => {
        const product = await setProducts(allProducts);
    }

    const fetchCart = () => {
        const response = carts;
        setCart(response);
    }

    const handleAddToCart = (productid, quantity) => {
        let item = { productid, quantity };
        setCart([...cart, item]);
    }

    const handleSearchData = (search) => {
        setData(search)
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    return (
        <Router>
            <div >
                <Navbar noOfdataInCart={cart.length} />
                <Searchbar handleSearchData={handleSearchData} />
                <Switch>
                    <Route exact path="/">
                        <AllProducts search={data} onAddToCart={handleAddToCart} products={products} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} products={products} />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
