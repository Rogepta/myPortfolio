import React from "react";
import styled from "styled-components";
import Button from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import photo from "../../../assets/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <div>
            <SmallText>Hi There</SmallText>
            <StyledName>I am Daniil Dergunov</StyledName>
            <StyledDescription>a Web developer</StyledDescription>
            <Button text={"Hire me"} width={"280px"} height={"70px"} />
          </div>

          <PhotoWrapper>
            <Photo src={photo} alt="me" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

const StyledName = styled.h2`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2.5px;
`;

const StyledDescription = styled.h1`
  font-size: 27px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 450px;
    height: 600px;
    background: linear-gradient(
      270deg,
      #13adc7 0%,
      #6978d1 66.67%,
      #945dd6 100%
    );

    position: absolute;
    top: -15px;
    left: 12px;
    z-index: -1;
    border-radius: 75px 0;  }
`;

const Photo = styled.img`
  object-fit: cover;
  width: 450px;
  height: 600px;
  border-radius: 50px 0;
  /* padding: 10px; */
`;
