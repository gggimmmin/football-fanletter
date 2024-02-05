import React from "react";
import fakeData from "../data/fakeData.json";
import { ListItem } from "src/styles/PlayerStyle";

function Player1() {
  const playerData = fakeData.filter((item) => item.writedTo === "손흥민");

  return (
    <div>
      <h1>Player1 - 손흥민</h1>
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
