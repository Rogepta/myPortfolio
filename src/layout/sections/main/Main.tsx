import React from "react";
import styled from "styled-components";
import Button from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import photo from "../../../assets/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap">
          <SMain>
            <SmallText>Hi There</SmallText>
            <StyledName>
              I am <span>Daniil Dergunov</span>
            </StyledName>
            <StyledDescription>a Web developer</StyledDescription>
            <StyledButton>
              <Button
                text={"Hire me"}
                width={"280px"}
                height={"70px"}
                href={"https://t.me/rogepta"}
              />
            </StyledButton>
          </SMain>

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

const SMain = styled.div`
  padding: 0 15px;
`;

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

const StyledName = styled.h2`
  ${font({ weight: 700, Fmax: 50, Fmin: 24 })}

  span {
    white-space: nowrap;
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;

const StyledDescription = styled.h1`
  ${font({ weight: 400, Fmax: 27, Fmin: 18 })}
  margin-bottom: 40px;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
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
    border-radius: 75px 0;

    @media ${theme.media.mobile} {
      width: 310px;
      height: 430px;
      margin-top: 45px;
    }

    @media ${theme.media.tablet} {
      justify-content: center;
      margin-top: 45px;
    }

    @media screen and (max-width: 769px) {
      margin-top: 45px;
    }
    @media screen and (max-width: 1024px) {
      margin-top: 45px;
    }
  }
`;

const Photo = styled.img`
  object-fit: cover;
  width: 450px;
  height: 600px;
  border-radius: 50px 0;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 430px;
    margin-top: 45px;
  }

  @media ${theme.media.tablet} {
    margin-top: 45px;
  }

  @media screen and (max-width: 769px) {
    margin-top: 45px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 45px;
  }
`;
