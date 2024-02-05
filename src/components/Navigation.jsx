import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavContainer, NavBtn } from "src/styles/NavigationStyle";

const Navigation = () => {
  const navigate = useNavigate();
  const [activePlayer, setActivePlayer] = useState(0);

  const handlePlayerClick = (player) => {
    navigate(`/player${player}`);
    setActivePlayer(player);
  };

  return (
    <NavContainer>
      <NavBtn onClick={() => handlePlayerClick(0)} active={activePlayer === 0}>
        Home
      </NavBtn>
      <NavBtn onClick={() => handlePlayerClick(1)} active={activePlayer === 1}>
        손흥민
      </NavBtn>
      <NavBtn onClick={() => handlePlayerClick(2)} active={activePlayer === 2}>
        이강인
      </NavBtn>
      <NavBtn onClick={() => handlePlayerClick(3)} active={activePlayer === 3}>
        김민재
      </NavBtn>
      <NavBtn onClick={() => handlePlayerClick(4)} active={activePlayer === 4}>
        황희찬
      </NavBtn>
    </NavContainer>
  );
};

export default Navigation;
