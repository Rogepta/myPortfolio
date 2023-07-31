import React from "react";
import Button from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import photo from "../../../assets/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap">
          <S.SMain>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Daniil Dergunov</span>
            </S.Name>
            <S.Description>a Web developer</S.Description>
            <S.Button>
              <Button
                text={"Hire me"}
                width={"280px"}
                height={"70px"}
                href={"https://t.me/rogepta"}
              />
            </S.Button>
          </S.SMain>

          <S.PhotoWrapper>
            <S.Photo src={photo} alt="me" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
