import { useEffect, useState } from "react";

import "./CategoryPage.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      key={`ProductCard-${item._id}`}
      description={item.description}
    />
  ));

  return (
    <section className=" consistent-padding category-page">
      <h2 className="text-align-center">{`${category}`}</h2>
      <div className="products-container">{displayItems}</div>
    </section>
  );
}
export default CategoryPage;
