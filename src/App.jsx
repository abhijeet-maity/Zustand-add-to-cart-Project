import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles/main.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
