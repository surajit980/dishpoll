import React from "react";

const Dish = ({ dish, addToRank1, addToRank2, addToRank3 }) => {
  return (
    <div className="card dish-card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{dish.dishName}</h5>
        <p className="card-text">{dish.description}</p>
        <div className="btn-group mr-2 " role="group" aria-label="Second group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addToRank1(dish.dishName)}
          >
            Rank 1
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addToRank2(dish.dishName)}
          >
            Rank 2
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addToRank3(dish.dishName)}
          >
            Rank 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dish;
