import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Enquiry from './pages/Enquiry';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import ProductDetail from './pages/ProductDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="enquiry" element={<Enquiry />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="product" element={<ProductDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
