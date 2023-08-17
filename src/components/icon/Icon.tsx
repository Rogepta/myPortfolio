import React from "react";
import iconSprites from "../../assets/icon-sprites.svg";

type IconPropsType = {
  iconId: string;
  height?: string;
  width?: string;
  viewBox?: string;
};
// ОЧень странный комп - со спрайтами аккуратнее. могут баги неприятные появится
// + не знаю можно ли их красить из css
// Лучше в asset сделать файл index.ts и из него экспортировать иконки
export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "50px"}
      height={props.height || "50px"}
      viewBox={props.viewBox || "0 0 50 50"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconSprites}#${props.iconId}`} />
    </svg>
  );
};
