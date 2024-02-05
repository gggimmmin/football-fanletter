import React, { useState } from "react";
import fakeData from "../data/fakeData.json";
import { ListItem } from "src/styles/PlayerStyle";
import LetterInput from "src/components/LetterInput";

function Player1() {
  const [playerData, setPlayerData] = useState(
    fakeData.filter((item) => item.writedTo === "손흥민")
  );

  const handleAddFanLetter = (newFanLetter) => {
    setPlayerData([...playerData, newFanLetter]);
  };

  return (
    <div>
      <h1>Player1 - 손흥민</h1>
      <LetterInput onAddFanLetter={handleAddFanLetter} currentPlayer="손흥민" />
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

export default Player1;
