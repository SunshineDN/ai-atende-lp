import * as S from './styles';
const Button = ({ $_inverse, text }) => {
  return (
    <S.ButtonContainer $_inverse={$_inverse}>
      {text || 'OBTENHA MAIS INFORMAÇÕES AGORA!'}
    </S.ButtonContainer>
  );
};

export default Button;
