import React from "react";
import Button from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import photo from "../../../assets/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";

export const Main: React.FC = () => {
  return (
    <S.Main id="main">
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap">
          <S.SMain>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Daniil Dergunov</span>
            </S.Name>
            <S.Description>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ["A Web Developer.", "A Frontend Developer."],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </S.Description>
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
