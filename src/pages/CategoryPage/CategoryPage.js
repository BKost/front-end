import { useState } from "react";
import "./CategoryPage.css";
import ProductCard from "../../Components/ProductCard/ProductCard";

function CategoryPage() {
  const [heading, setHeading] = useState("");

  const categories = [
    {
      category: "Electronics",
      path: "/electronics",
    },
    {
      category: "Home",
      path: "/home",
    },
    {
      category: "Kitchen",
      path: "/kitchen",
    },
    {
      category: "Clothes",
      path: "/clothes",
    },
  ];
  return (
    <section className=" consistent-padding category-page">
      <h2 className="text-align-center">Category section</h2>
      <div className="products-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
export default CategoryPage;
