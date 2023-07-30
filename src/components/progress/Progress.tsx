import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";

type ProgressPropTypes = {
  completed: number;
  text: string;
};

export const Progress = (props: ProgressPropTypes) => {
  return (
    <StyledProgress>
      <p>{props.text}</p>
      <ProgressBar
        completed={props.completed}
        bgColor={
          "linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)"
        }
        animateOnRender={true}
      />
    </StyledProgress>
  );
};

const StyledProgress = styled.div`
  p {
    color: white;
    margin: 10px;
  }
  margin-bottom: 10px;
`;
