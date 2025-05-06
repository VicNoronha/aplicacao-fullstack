import { Link } from 'react-router-dom';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../iconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function Header() {
  return (
    <HeaderContainer role="banner">
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;