import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/theme";

const Main = styled.section`
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

const Name = styled.h2`
  ${font({ weight: 700, Fmax: 50, Fmin: 24 })}

  span {
    white-space: nowrap;
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;

const Description = styled.h1`
  ${font({ weight: 400, Fmax: 27, Fmin: 18 })}
  margin-bottom: 40px;
`;

const Button = styled.div`
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
    @media screen and (max-width: 1280px) {
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

  @media screen and (max-width: 1280px) {
    margin-top: 45px;
  }
`;


export const S = {
   Main,
   SMain,
   SmallText,
   Name,
   Description,
   Button,
   PhotoWrapper,
   Photo
}