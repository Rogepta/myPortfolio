import React from "react";
import { Icon } from "../icon/Icon";
// Тоже супер непонятный комп - зачем тут ссылка
export const Logo = () => {
  return (
    <a href="">
      <Icon
        iconId={"logo"}
        width={"48px"}
        height={"48px"}
        viewBox={"0 0 48 48"}
      />
    </a>
  );
};
