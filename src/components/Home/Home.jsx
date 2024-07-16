import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import * as S from './styles';

const Home = () => {
  return (
    <S.HomeContainer>
      <Logo />
      <S.HomeContent>
        <S.RightSection>
          <S.Headline>
            Pare de perder clientes no WhatsApp aumentando em até 3x
            os <S.SpanBlue>agendamentos da sua clínica.</S.SpanBlue>
          </S.Headline>
          <S.Subheadline>
            Com nosso método de atendimento através IA você
            consegue ter respostas imediatas de forma humanizada,
            agendar consultas no automático, além de enviar
            lembretes aos seus pacientes.
          </S.Subheadline>
          <Button />
        </S.RightSection>
        <S.LeftSection />
      </S.HomeContent>
    </S.HomeContainer>
  );
};

export default Home;
