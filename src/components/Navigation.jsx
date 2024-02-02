// Navigation.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handlePlayerClick = (player) => {
    navigate(`/player${player}`);
  };

  return (
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate("src/pages/Home.jsx");
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button onClick={() => handlePlayerClick(1)}>Player 1</button>
        </li>
        <li>
          <button onClick={() => handlePlayerClick(2)}>Player 2</button>
        </li>
        <li>
          <button onClick={() => handlePlayerClick(3)}>Player 3</button>
        </li>
        <li>
          <button onClick={() => handlePlayerClick(4)}>Player 4</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
