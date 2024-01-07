import { useEffect, useState } from "react";

import "./CategoryPage.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function CategoryPage() {
  const { category } = useParams();

  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [category]);

  function fetchPosts() {
    axios
      .get(`/api/items/categories/${category}`)
      .then((response) => {
        const { itemsArr } = response.data;
        console.log(itemsArr);
        setCategoryItems(itemsArr);
      })
      .catch((err) => console.log(err));
  }

  const displayItems = categoryItems?.map((item) => (
    <ProductCard
      title={item.title}
      price={item.price}
      image={item.image}
      id={item._id}
      description={item.description}
    />
  ));

  return (
    <section className=" consistent-padding category-page">
      <h2 className="text-align-center">{`${category}`}</h2>
      <div className="products-container">
        {displayItems}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </section>
  );
}
export default CategoryPage;
