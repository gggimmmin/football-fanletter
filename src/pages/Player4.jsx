import React from "react";
import fakeData from "../data/fakeData.json";
import { ListItem } from "src/styles/PlayerStyle";

function Player4() {
  const playerData = fakeData.filter((item) => item.writedTo === "황희찬");

  return (
    <div>
      <h1>Player4 - 황희찬</h1>
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

export default Player4;
