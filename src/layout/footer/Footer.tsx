import React from "react";
import { Social } from "../../components/social/Social";
import { S } from "./Footer_Styles";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Social />
      <S.Copyright>© 2023 Daniil Dergunov, All Rights Reserved.</S.Copyright>
    </S.Footer>
  );
};
