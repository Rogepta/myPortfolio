import React from "react";
import { Social } from "../../../../components/social/Social";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Menu  />
      <Social />
    </S.DesktopMenu>
  );
};
