import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/theme";

const Project = styled.div`
  ${font({ weight: 600, Fmax: 28, Fmin: 20, family: "Poppins" })}
  width: 500px;
  flex-shrink: 0;
  border-radius: 50px 0px;
  background: ${theme.colors.primaryBg};
  color: ${theme.colors.font};
  padding: 20px auto;

  @media ${theme.media.mobile} {
    width: 330px;
    background: ${theme.colors.primaryBg};
  }
  img {
    width: 450px;
    height: 250px;
    border-radius: 50px 0;

    @media ${theme.media.mobile} {
      width: 280px;
      height: 165px;
      object-fit: cover;
    }
  }
`;

const ProjectContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.h2`
  ${font({ weight: 600, Fmax: 36, Fmin: 24, family: "Poppins" })}

  color: ${theme.colors.font};
  padding: 25px 0;
  text-align: center;

  @media ${theme.media.mobile} {
    padding: 10px 0;
  }
`;

const Divider = styled.div`
  width: 300px;
  height: 4px;
  flex-shrink: 0;
  border-radius: 83px;
  background: ${theme.colors.accent};
  margin: 0 auto;

  @media ${theme.media.mobile} {
    width: 180px;
  }
`;

const ProjectParagraph = styled.p`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: ${theme.colors.font};

  font-size: 16px;
  font-weight: 200;
  margin: 25px 0;

  @media ${theme.media.mobile} {
    margin: 10px 0;
  }
`;

export const S = {
   Project,
   ProjectContainer,
   Title,
   Divider,
   ProjectParagraph
}