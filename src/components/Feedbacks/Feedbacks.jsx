import * as S from './styles';
import ProfileImage from '../../assets/augencio.png';

const Feedbacks = () => {
  return (
    <S.Container>
      <S.Title>
        Saiba o  que nossos usuários estão achando
      </S.Title>
      <S.Text>
        Leia os relatos de agradecimento dos nossos usuários
      </S.Text>
      <S.CardSlide>
        <S.Card>
          <S.Text>
            Desde que descobri o AISAÚDE, minha jornada como estudante deu um salto gigantesco! As ferramentas disponíveis, como o gerador de casos clínicos e o auxílio para compreender diagnósticos, têm sido cruciais para aprimorar meu conhecimento e habilidades.
          </S.Text>
          <S.Line />
          <S.BottomContainer>
            <S.ProfileWrapper>
              <S.ProfileIcon image={ProfileImage} />
              <S.ProfileInfo>
                <S.ProfileName>
                  Douglas Augusto
                </S.ProfileName>
                <S.ProfileRule>
                  Desenvolvedor de Sistemas
                </S.ProfileRule>
              </S.ProfileInfo>
            </S.ProfileWrapper>
            <S.StarWrapper>
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon />
            </S.StarWrapper>
          </S.BottomContainer>
        </S.Card>
        <S.Card>
          <S.Text>
            Mudou completamente minha abordagem como profissional. As ferramentas disponíveis na plataforma são verdadeiramente inovadoras. A geração de casos clínicos e o auxílio para compreensão de diagnósticos têm sido fundamentais para o meu desenvolvimento profissional.
          </S.Text>
          <S.Line />
          <S.BottomContainer>
            <S.ProfileWrapper>
              <S.ProfileIcon image={ProfileImage} />
              <S.ProfileInfo>
                <S.ProfileName>
                  Augêncio Leite
                </S.ProfileName>
                <S.ProfileRule>
                  Empresário
                </S.ProfileRule>
              </S.ProfileInfo>
            </S.ProfileWrapper>
            <S.StarWrapper>
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon />
            </S.StarWrapper>
          </S.BottomContainer>
        </S.Card>
      </S.CardSlide>
      <S.ButtonContainer>
        <S.Button $_active />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Feedbacks;
