import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={active === "dishes" ? "nav-link active" : "nav-link"}
            to="/dishes"
          >
            Dishes
          </Link>
        </li>
        <li className="nav-item  ">
          <Link
            className={active === "ranking" ? "nav-link active" : "nav-link"}
            to="/ranking"
          >
            Ranking
          </Link>
        </li>
        <li className="nav-item  ">
          <Link className="nav-link" to="/">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
