import React from "react";
import { Progress } from "../../../components/progress/Progress";
import styled from "styled-components";
import { Additional } from "../../../components/additional/Additional";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";

export const Technologies = () => {
  return (
    <StyledTechnologies>
      <Container>
        <STechnologies>
          <SectionTitle>Technologies</SectionTitle>
          <Progress text={"HTML"} completed={90} />
          <Progress text={"CSS, Sass & Bootstrap"} completed={90} />
          <Progress text={"JavaScript, TypeScript"} completed={70} />
          <Progress text={"UI design in Figma"} completed={60} />
          <Progress text={"React"} completed={60} />
          <Progress text={"Redux, Redux Toolkit"} completed={50} />
          <Progress text={"Jest, Cypress"} completed={35} />
        </STechnologies>
        <Additional />
      </Container>
    </StyledTechnologies>
  );
};

const StyledTechnologies = styled.section``;

const STechnologies = styled.div`
  padding: 20px;
`;
