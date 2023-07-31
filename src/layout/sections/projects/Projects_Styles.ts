import styled from "styled-components";
import { theme } from "../../../styles/theme";

const SProject = styled.section``;

const Project = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1061px) {
    justify-content: center;
    align-items: center;
  }
`;

export const S = {
   SProject,
   Project,
}