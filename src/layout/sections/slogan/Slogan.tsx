import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";

export const Slogan: React.FC = () => {
  return (
    <StyledSlogan>
      <Container>
        <SectionTitle>
          "Development is my sculpture in the world of code!"
        </SectionTitle>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  padding: 0 auto;
`;
