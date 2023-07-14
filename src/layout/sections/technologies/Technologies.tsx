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
          <Progress text={"HTML"} comleted={85} />
          <Progress text={"CSS, Sass & Bootstrap"} comleted={85} />
          <Progress text={"JavaScript, TypeScript"} comleted={65} />
          <Progress text={"UI design in Figma"} comleted={60} />
          <Progress text={"React"} comleted={60} />
          <Progress text={"Redux, Redux Toolkit"} comleted={40} />
          <Progress text={"Jest, Cypress"} comleted={20} />
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
