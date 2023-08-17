import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

type ButtonPropTypes = {
  text: string;
};

type StyledVButtonPropsType = {
  width?: string;
  height?: string;
  href?: string;
};

export const Link = (props: ButtonPropTypes & StyledVButtonPropsType) => {
  const { text, ...propsStyled } = props;

  return (
    <StyledLink {...propsStyled} href={props.href} target="_blank">
      {text}
    </StyledLink>
  );
};

export default Link;

const StyledLink = styled.a<StyledVButtonPropsType>`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "70px"};
  flex-shrink: 0;
  border-radius: 83px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${theme.media.mobile} {
    width: 200px;
    height: 45px;
    font-weight: 400;
    font-size: 15px;
  }
`;
