import React from "react";
import { Year } from "../../../components/year/Year";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./About_Styles";

const yearsData = [
  {
    year: 2020,
    description:
      "I became interested in programming at school. Later I learned about the frontend and started learning HTML, CSS.",
  },
  {
    year: 2021,
    description:
      "The first time I got acquainted with the dynamics (JS). Started learning React.",
  },
  {
    year: 2022,
    description:
      "Got a job in the product company as a layout designer, worked for 7 months.",
  },
  {
    year: 2023,
    description:
      "From the end of 2022 to the present, I have been working as a frontend developer.",
  },
];

export const About: React.FC = () => {
  return (
    <S.About id="about">
      <Container>
        <SectionTitle>About me</SectionTitle>
        <S.Div>
          {yearsData.map((y, index) => {
            return (
              <Year year={y.year} description={y.description} key={index} />
            );
          })}
        </S.Div>
      </Container>
    </S.About>
  );
};
