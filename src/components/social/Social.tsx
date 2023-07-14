import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Social = () => {
  return (
    <StyledSocial>
      <a href="https://t.me/rogepta" target="_blank">
        <Icon
          iconId={"tg"}
          height={"32px"}
          width={"32px"}
          viewBox={"0 0 32 32"}
        />
      </a>
      <a href="https://github.com/Rogepta" target="_blank">
        <Icon
          iconId={"github"}
          height={"32px"}
          width={"32px"}
          viewBox={"0 0 32 32"}
        />
      </a>
    </StyledSocial>
  );
};

const StyledSocial = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;
