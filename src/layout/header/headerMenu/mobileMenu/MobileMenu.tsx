import { Social } from "../../../../components/social/Social";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";
import { FC } from "react";

export const MobileMenu: FC = () => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopUp isOpen={false}>
        <Menu />
        <Social />
      </S.MobileMenuPopUp>
    </S.MobileMenu>
  );
};
