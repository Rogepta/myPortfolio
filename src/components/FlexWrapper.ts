import styled from "styled-components";

type FlexWrapperPropTypes = {
   direction?: string
   justify?: string
   align?: string
   wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropTypes>`
   display: flex;
   flex-direction: ${props => props.direction || "row"};
   justify-content: ${props => props.justify || "flex-start"};
   align-items: ${props => props.align || "strecth"};
   flex-wrap: ${props => props.wrap || "nowrap"};

`