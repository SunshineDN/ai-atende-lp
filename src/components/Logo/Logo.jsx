import * as S from './styles';
import LogoIcon from '../../assets/icons/aiatende.svg';

const Logo = ({ $_justify }) => {
  return (
    <S.LogoContainer $_justify={$_justify}>
      <S.LogoImage src={LogoIcon} alt='logo' />
      <S.LogoText>AI Atende</S.LogoText>
    </S.LogoContainer>
  );
};

export default Logo;
