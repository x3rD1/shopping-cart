import { Outlet } from "react-router";
import Nav from "../Nav/Nav";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Outlet context={products} />
      </main>
    </>
  );
}

export default App;
