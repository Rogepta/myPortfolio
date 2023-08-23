import React from "react";
import { Progress } from "../../../components/progress/Progress";
import styled from "styled-components";
import { Additional } from "../../../components/additional/Additional";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";

const progressData = [
  {
    text: "HTML",
    completed: 90,
  },
  {
    text: "CSS, Sass & Bootstrap",
    completed: 90,
  },
  {
    text: "JavaScript, TypeScript",
    completed: 70,
  },
  {
    text: "UI design in Figma",
    completed: 60,
  },
  {
    text: "React",
    completed: 60,
  },
  {
    text: "Redux, Redux Toolkit",
    completed: 50,
  },
  {
    text: "Jest, Cypress",
    completed: 35,
  },
];

export const Technologies: React.FC = () => {
  return (
    <StyledTechnologies id="technologies">
      <Container>
        <STechnologies>
          <SectionTitle>Technologies</SectionTitle>

          {progressData.map((p, index) => {
            return (
              <Progress text={p.text} completed={p.completed} key={index} />
            );
          })}
        </STechnologies>
        <Additional />
      </Container>
    </StyledTechnologies>
  );
};

const StyledTechnologies = styled.section`
  position: relative;
`;

const STechnologies = styled.div``;
