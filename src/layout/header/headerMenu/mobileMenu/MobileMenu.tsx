import { Social } from "../../../../components/social/Social";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";
import { FC, useState } from "react";

export const MobileMenu: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBtnBurgerClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBtnBurgerClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopUp
        isOpen={menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      >
        <Menu />
        <Social />
      </S.MobileMenuPopUp>
    </S.MobileMenu>
  );
};
