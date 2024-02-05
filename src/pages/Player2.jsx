import React from "react";
import fakeData from "../data/fakeData.json";
import { ListItem } from "src/styles/PlayerStyle";

function Player2() {
  const playerData = fakeData.filter((item) => item.writedTo === "이강인");

  return (
    <div>
      <h1>Player2 - 이강인</h1>
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

export default Player2;
