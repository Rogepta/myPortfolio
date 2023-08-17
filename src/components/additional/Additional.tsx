import React from "react";
import { S } from "./Additional_Styles";
// Не используй FC без описания пропсов!
// Лучше юзай как написал я
export const Additional = (): React.ReactElement => {
  // Список можно было мапнуть (map(...)) - более декларативно
  return (
    <S.Additional>
      <S.H2Additional>Additional technologies and skills</S.H2Additional>
      <ul>
        <li>Git</li>
        <li>Quick learning</li>
        <li>Teamwork</li>
        <li>B1 english</li>
      </ul>
    </S.Additional>
  );
};
