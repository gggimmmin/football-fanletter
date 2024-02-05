// LetterInput.js
import React, { useState } from "react";

const LetterInput = ({ onAddFanLetter, currentPlayer }) => {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const handleAddFanLetter = () => {
    if (nickname.trim() === "" || content.trim() === "") {
      alert("닉네임과 내용을 모두 제공해주세요.");
      return;
    }

    const newFanLetter = {
      id: new Date().getTime(),
      writedTo: currentPlayer,
      nickname: nickname,
      content: content,
    };

    onAddFanLetter(newFanLetter);

    setNickname("");
    setContent("");
  };

  return (
    <div>
      <h2>Write Fan Letter to {currentPlayer}</h2>
      <div>
        <label>Nickname:</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={handleAddFanLetter}>Add Fan Letter</button>
    </div>
  );
};

export default LetterInput;
