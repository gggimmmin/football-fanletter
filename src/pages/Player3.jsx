import React, { useState } from "react";
import fakeData from "../data/fakeData.json";
import { ListItem } from "src/styles/PlayerStyle";
import LetterInput from "src/components/LetterInput";

function Player3() {
  const [playerData, setPlayerData] = useState(
    fakeData.filter((item) => item.writedTo === "김민재")
  );

  const handleAddFanLetter = (newFanLetter) => {
    setPlayerData([...playerData, newFanLetter]);
  };

  return (
    <div>
      <h1>Player3 - 김민재</h1>
      <LetterInput onAddFanLetter={handleAddFanLetter} currentPlayer="김민재" />
      <ul>
        {playerData.map((item) => (
          <ListItem key={item.id}>
            <p>{item.nickname}</p>
            <p>{item.content}</p>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default Player3;
