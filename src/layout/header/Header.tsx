import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DesktopMenu } from "../header/headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "../header/headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";
// я б логику эту вынес в хук если честно. Выглядит так, словно можно переиспользовать
export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768; // явно константа. Такое выносится в файлик const, пишется капслоком
  // и лучше описать более подробно
  
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />

          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
