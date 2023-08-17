import React from "react";
import { Link } from "../button/Button";
import { S } from "./Project_Styles";

type ProjectPropTypes = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
};
// 2 раза типизируешь. Оставь Type только в FC
export const Project: React.FC<ProjectPropTypes> = (
  props: ProjectPropTypes
) => {
  return (
    <S.Project>
      <S.ProjectContainer>
        <div>
          <img src={props.image} alt={props.alt} />
          <S.Title>{props.title}</S.Title>
          <S.Divider></S.Divider>
          <S.ProjectParagraph>{props.description}</S.ProjectParagraph>
        </div>
        <Link text="Look it up" height="40px" width="200px" href={props.href} />
      </S.ProjectContainer>
    </S.Project>
  );
};
