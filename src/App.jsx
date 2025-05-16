
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
