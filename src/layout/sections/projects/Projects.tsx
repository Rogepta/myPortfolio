import React from "react";
import { Project } from "../../../components/project/Project";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import stroyka from "../../../assets/stroyka.png";
import osago from "../../../assets/osago.png";
import titan from "../../../assets/titan.png";
import h2o from "../../../assets/h2o.png";

const desc = {
  stroyka:
    "Participated in the layout of the admin panel. Develops components: editing user information, displaying information about purchases",
  osago:
    "Engaged in design development, created a landing page optimized for desktop and mobile layout. Made requests to insurance companies using RESTfull API technology. Used React.",
  titan:
    "Developed pop up to communicate with technical support, developed architecture and layout of pages, set up tg bot for cliens to enroll in the gym.",
  h2o: "Test task using libraries from React, wrote a project using router, react-table, react-calendar...",
};

const links = {
  stroyka: "https://stroy-ka.ru/",
  osago: "https://get-osago.ru/",
  titan: "https://titan31.ru/",
  h2o: "https://github.com/Rogepta/h2o",
};

export const Projects = () => {
  return (
    <SProject>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <StyledProject>
          <Project
            title="Stroyka.ru"
            description={desc.stroyka}
            image={stroyka}
            alt="stroyka"
            href={links.stroyka}
          />
          <Project
            title="Osago"
            description={desc.osago}
            image={osago}
            alt="osago"
            href={links.osago}
          />
          <Project
            title="Titan31"
            description={desc.titan}
            image={titan}
            alt="titan"
            href={links.titan}
          />
          <Project
            title="H2O"
            description={desc.h2o}
            image={h2o}
            alt="h2o"
            href={links.h2o}
          />
        </StyledProject>
      </Container>
    </SProject>
  );
};

const SProject = styled.section``;

const StyledProject = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
