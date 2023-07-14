import React from "react";
import styled from "styled-components";
import Button, { Link } from "../button/Button";
import { theme } from "../../styles/theme";

type ProjectPropTypes = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
};

export const Project = (props: ProjectPropTypes) => {
  return (
    <StyledProject>
      <StyledProjectContainer>
        <div>
          <img src={props.image} alt={props.alt} />
          <StyledTitle>{props.title}</StyledTitle>
          <StyledDivider></StyledDivider>
          <StyledProjectParagraph>{props.description}</StyledProjectParagraph>
        </div>
        <Link text="Look it up" height="40px" width="200px" href={props.href} />
      </StyledProjectContainer>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 500px;
  flex-shrink: 0;
  border-radius: 50px 0px;
  background: ${theme.colors.primaryBg};
  color: ${theme.colors.font};
  font-size: 28px;
  font-weight: 600;
  padding: 20px auto;

  img {
    width: 450px;
    height: 250px;
    border-radius: 50px 0;
  }
`;

const StyledProjectContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledTitle = styled.h2`
  color: ${theme.colors.font};
  padding: 25px 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 88.5%;
  text-align: center;
`;

const StyledDivider = styled.div`
  width: 300px;
  height: 4px;
  flex-shrink: 0;
  border-radius: 83px;
  background: ${theme.colors.accent};
  margin: 0 auto;
`;

const StyledProjectParagraph = styled.p`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: ${theme.colors.font};
  font-size: 16px;
  font-weight: 200;
  margin: 25px 0;
`;
