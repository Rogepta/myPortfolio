import React from "react";
import { Project } from "../../../components/project/Project";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import stroyka from "../../../assets/stroyka.png";
import osago from "../../../assets/osago.png";
import titan from "../../../assets/titan.png";
import h2o from "../../../assets/h2o.png";
import { S } from "./Projects_Styles";

const projectData = [
  {
    title: "Stroyka.ru",
    description:
      "Participated in the layout of the admin panel. Develops components: editing user information, displaying information about purchases",
    image: stroyka,
    alt: "stroyka",
    href: "https://stroy-ka.ru/",
  },
  {
    title: "Osago",
    description:
      "Engaged in design development, created a landing page optimized for desktop and mobile layout. Made requests to insurance companies using RESTfull API technology. Used React.",
    image: osago,
    alt: "osago",
    href: "https://get-osago.ru/",
  },
  {
    title: "Titan31",
    description:
      "Developed pop up to communicate with technical support, developed architecture and layout of pages, set up tg bot for cliens to enroll in the gym.",
    image: titan,
    alt: "titan",
    href: "https://titan31.ru/",
  },
  {
    title: "H2O",
    description:
      "Testing task using libraries from React, wrote a project using router, react-table, react-calendar...",
    image: h2o,
    alt: "h2o",
    href: "https://github.com/Rogepta/h2o",
  },
];

export const Projects: React.FC = () => {
  return (
    <S.SProject id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <S.Project>
          {projectData.map((p, index) => {
            // понимаю что p - project, но лучше написать что то более понятное
            // ! Почитай ЧИСТЫЙ КОД
            return (
              <Project
                title={p.title}
                description={p.description}
                image={p.image}
                alt={p.alt}
                href={p.href}
                key={index}
              />
            );
          })}
        </S.Project>
      </Container>
    </S.SProject>
  );
};
