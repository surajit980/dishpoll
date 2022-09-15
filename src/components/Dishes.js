import React from "react";
import Dish from "./Dish";
import Navbar from "./Navbar";

const Dishes = ({ dishes, addToRank1, addToRank2, addToRank3 }) => {
  return (
    <>
      <Navbar active="dishes" />
      <div className="dishes container">
        {dishes.map((dish) => (
          <Dish
            dish={dish}
            key={dish.id}
            addToRank1={addToRank1}
            addToRank2={addToRank2}
            addToRank3={addToRank3}
          />
        ))}
      </div>
    </>
  );
};

export default Dishes;
