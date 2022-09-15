import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="card text-center main-card">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Welcome to Dishpoll app</h5>
          <p className="card-text">Click a button to check your dish ranking</p>
          <Link to="/dishes" className="btn btn-primary tab-btn">
            Dishes
          </Link>
          <Link to="/ranking" className="btn btn-primary tab-btn">
            Ranking
          </Link>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </div>
  );
};

export default Main;
