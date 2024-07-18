import * as S from './styles';
const Button = ({ $_inverse, text, href }) => {
  return (
    <S.ButtonContainer $_inverse={$_inverse} href={href}>
      {text || 'OBTENHA MAIS INFORMAÇÕES AGORA!'}
    </S.ButtonContainer>
  );
};

export default Button;
