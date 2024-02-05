import React from "react";
import fakeData from "../data/fakeData.json";
import { ListItem } from "src/styles/PlayerStyle";

function Player3() {
  const playerData = fakeData.filter((item) => item.writedTo === "김민재");

  return (
    <div>
      <h1>Player3 - 김민재</h1>
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
