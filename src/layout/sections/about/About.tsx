import React from "react";
import { Year } from "../../../components/year/Year";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { theme } from "../../../styles/theme";

const years = {
  2020: "I became interested in programming at school. Later I learned about the frontend and started learning HTML, CSS.",
  2021: "The first time I got acquainted with the dynamics (JS). Started learning React.",
  2022: "Got a job in the product company as a layout designer, worked for 7 months.",
  2023: "From the end of 2022 to the present, I have been working as a frontend developer.",
};

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <StyledDiv>
          <Year year={2020} description={years[2020]} />
          <Year year={2021} description={years[2021]} />
          <Year year={2022} description={years[2022]} />
          <Year year={2023} description={years[2023]} />
        </StyledDiv>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section``;

const StyledDiv = styled.div`
  display: flex;
  gap: 20px;

  @media ${theme.media.mobile} {
    flex-direction: column;
    gap: 10;
  }
`;
