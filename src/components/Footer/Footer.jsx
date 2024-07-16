import Logo from '../Logo/Logo';
import * as S from './styles';
import ButtonInput from '../Button/ButtonInput';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <S.Container>
      <S.Content>
        <S.FlexFooterContainer $_w={'50%'}>
          <Logo $_justify={'flex-start'} />
          <S.Text>
            Não perca as últimas novidades e dicas exclusivas! Assine nossa newsletter agora e mantenha-se sempre à frente no mundo da saúde e tecnologia.
            <br />
            <br />
            Receba atualizações, promoções, avisos, notícias e muito mais!
          </S.Text>
          <ButtonInput />
          <S.Span>
            © {year} Augêncio Leite. Todos Os Direitos Reservados.
          </S.Span>
        </S.FlexFooterContainer>
        <S.FlexFooterContainer>
          <S.Text $_bold>
            Termos e Condições
          </S.Text>
          <S.Link href='#'>
            Política de Privacidade
          </S.Link>
          <S.Link href='#'>
            Política de Cookies
          </S.Link>
        </S.FlexFooterContainer>
        <S.FlexFooterContainer>
          <S.Text $_bold>
            Redes Sociais
          </S.Text>
          <S.SocialWrapper>
            <S.InstagramIcon />
            <S.FacebookIcon />
            <S.YoutubeIcon />
          </S.SocialWrapper>
        </S.FlexFooterContainer>
      </S.Content>
    </S.Container>
  );
};

export default Footer;
