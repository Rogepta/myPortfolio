import React from "react";
import { S } from "../HeaderMenu_Styles";

export type MenuItemType = {
  item: string;
  href: string;
};

const menuItemsData: MenuItemType[] = [
  {
    item: "Project",
    href: "#projects",
  },
  {
    item: "Technologies",
    href: "#technologies",
  },
  {
    item: "About me",
    href: "#about",
  },
];
export const Menu: React.FC = () => {
  return (
    <S.ListItem>
      {menuItemsData.map((p, index) => {
        return (
          <li key={index}>
            <S.Link href={p.href}>{p.item}</S.Link>
          </li>
        );
      })}
    </S.ListItem>
  );
};
