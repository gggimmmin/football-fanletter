import React, { useState } from "react";
import {
  LetterContainer,
  Title,
  Label,
  Input,
  TextArea,
  Button,
} from "src/styles/LetterInputStyle";

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
    <LetterContainer>
      <Title>Write Fan Letter to {currentPlayer}</Title>
      <div>
        <label>Nickname:</label>
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>
      <div>
        <Label>Content:</Label>
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Button onClick={handleAddFanLetter}>Add Fan Letter</Button>
    </LetterContainer>
  );
};

export default LetterInput;
