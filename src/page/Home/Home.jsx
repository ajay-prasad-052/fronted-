import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [Category, setCategory] = useState("all");

  return (
    <div>
      <Header />
      <ExploreMenu Category={Category} setCategory={setCategory} />
      <FoodDisplay category={Category} />
    </div>
  );
};

export default Home;
