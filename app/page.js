"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    
    <div>Hey</div>
  );
}