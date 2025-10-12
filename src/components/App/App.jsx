import { Outlet } from "react-router";
import Nav from "../Nav/Nav";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState(products);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const cartLength = cart.length;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFiltered(data);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav cartLength={cartLength} />
      <main>
        <Outlet
          context={{
            products,
            filtered,
            setFiltered,
            setCart,
            cart,
            cartLength,
            quantity,
            setQuantity,
          }}
        />
      </main>
    </>
  );
}

export default App;
