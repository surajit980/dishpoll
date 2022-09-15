// import react packages
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import users data
import { users } from "../json-data/users";

// import components
import Main from "./Main";
import NoPage from "./NoPage";
import Dishes from "./Dishes";
import Login from "./Login";
import Ranking from "./Ranking";

const App = () => {
  // users full database
  const [usersDb, setUsersDb] = useState([]);
  // add uers in main db
  const fetchUserstDb = () => {
    const tempArray = [];
    users.map((user) => {
      const tempData = {
        userData: user,
        userRankedDishes: {
          rank1: "not selected",
          rank2: "not selected",
          rank3: "not selected",
        },
      };
      tempArray.push(tempData);
      return 0;
    });
    setUsersDb(tempArray);
  };
  // add dish to rank 1
  const addToRank1 = (dishName) => {
    let tempDb = usersDb;
    if (
      tempDb[loggedUserId - 1].userRankedDishes.rank2 === dishName ||
      tempDb[loggedUserId - 1].userRankedDishes.rank3 === dishName
    ) {
      alert("dish already add in rank2 or rank3 please add new one");
      return;
    } else {
      tempDb[loggedUserId - 1].userRankedDishes.rank1 = dishName;
      alert("dish added successfully in rank1");
    }
  };
  // add dish to rank2
  const addToRank2 = (dishName) => {
    let tempDb = usersDb;
    if (
      tempDb[loggedUserId - 1].userRankedDishes.rank1 === dishName ||
      tempDb[loggedUserId - 1].userRankedDishes.rank3 === dishName
    ) {
      alert("dish already add in rank1 or rank3 please add new one");
      return;
    } else {
      tempDb[loggedUserId - 1].userRankedDishes.rank2 = dishName;
      alert("dish added successfully in rank2");
    }
  };
  // add dish to rank3
  const addToRank3 = (dishName) => {
    let tempDb = usersDb;
    if (
      tempDb[loggedUserId - 1].userRankedDishes.rank2 === dishName ||
      tempDb[loggedUserId - 1].userRankedDishes.rank1 === dishName
    ) {
      alert("dish already add in rank1 or rank2 please add new one");
      return;
    } else {
      tempDb[loggedUserId - 1].userRankedDishes.rank3 = dishName;
      alert("dish added successfully in rank3");
    }
  };

  // set logged in user id
  const [loggedUserId, setLoggedUSerId] = useState(0);
  const setUserId = (id) => {
    setLoggedUSerId(id);
  };

  //  fetch dishes and store
  const [dishes, setDishes] = useState([]);
  const fetchDishes = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
    )
      .then((response) => response.json())
      .then((json) => json);
    setDishes(data);
  };

  // it will run one time when app render
  useEffect(() => {
    fetchUserstDb();
    fetchDishes();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login setUserId={setUserId} usersDb={usersDb} />}
        />

        {/* route for main page */}
        {loggedUserId > 0 ? (
          <Route path="/main" element={<Main userId={loggedUserId} />} />
        ) : (
          <Route path="/main" element={<NoPage />} />
        )}

        {/* route for all dishes */}
        {loggedUserId > 0 ? (
          <Route
            path="/dishes"
            element={
              <Dishes
                dishes={dishes}
                addToRank1={addToRank1}
                addToRank2={addToRank2}
                addToRank3={addToRank3}
              />
            }
          />
        ) : (
          <Route path="/dishes" element={<NoPage />} />
        )}

        {/* route for all ranking */}
        {loggedUserId > 0 ? (
          <Route
            path="/ranking"
            element={
              <Ranking
                rankingDishes={usersDb[loggedUserId - 1].userRankedDishes}
              />
            }
          />
        ) : (
          <Route path="/ranking" element={<NoPage />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
