// shared/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "src/pages/Home";
import Player1 from "src/pages/Player1";
import Player2 from "src/pages/Player2";
import Player3 from "src/pages/Player3";
import Player4 from "src/pages/Player4";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="player0" element={<Home />} />
      <Route path="player1" element={<Player1 />} />
      <Route path="player2" element={<Player2 />} />
      <Route path="player3" element={<Player3 />} />
      <Route path="player4" element={<Player4 />} />
    </Routes>
  );
};

export default AppRoutes;
