import React from "react";
import Navbar from "./Navbar";

const Ranking = ({ rankingDishes }) => {
  return (
    <>
      <Navbar active="ranking" />
      <div className="ranking-container">
        <table className="table ranking-table">
          <caption>Ranking Dishes</caption>
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Dish Name</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#1</th>
              <td>{rankingDishes.rank1}</td>
              <td>40</td>
            </tr>
            <tr>
              <th scope="row">#2</th>
              <td>{rankingDishes.rank2}</td>
              <td>30</td>
            </tr>
            <tr>
              <th scope="row">#3</th>
              <td>{rankingDishes.rank3}</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Ranking;
