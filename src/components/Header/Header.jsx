import { MainHeader } from "../../styles/Typography.style";
import { WrapperUp } from "../Wrapper/Wrapper.style";
import { Image, Logo } from "../Images/Image.style";

const Header = ({ headerInfo }) => {
  return (
    <WrapperUp>
      <Logo src="assets/logo/what-to-eat-logo.svg" alt="O que comer?"></Logo>
      <MainHeader>{headerInfo}</MainHeader>
    </WrapperUp>
  );
};

export default Header;
