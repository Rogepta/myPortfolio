import styled from "styled-components";
import { theme } from "../styles/theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
font-size: 64px;
font-weight: 600;
margin: 20px 0;
text-align: center;

@media ${theme.media.mobile} {
   ${font({ weight: 600, Fmax: 64, Fmin: 10, family: "Poppins" })}

}
`