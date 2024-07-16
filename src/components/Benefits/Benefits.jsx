import * as S from './styles';
import Button from '../Button/Button';

const Benefits = () => {
  return (
    <S.Container>
      <S.Title>Benefícios</S.Title>
      <S.Subtitle>Conheça os benefícios de ser um membro da nossa plataforma</S.Subtitle>
      <S.CardWrapper>
        <S.CardIcon />
        <S.CardTitle>Experiências únicas</S.CardTitle>
        <S.CardLine />
        <S.CardTextWrapper>
          <S.CardItem>
            <S.CardCheckIcon />
            <S.CardText>
              Acesso ilimitado a todas as ferramentas
            </S.CardText>
          </S.CardItem>
          <S.CardItem>
            <S.CardCheckIcon />
            <S.CardText>
              Acesso a conteúdos educativos introdutórios
            </S.CardText>
          </S.CardItem>
          <S.CardItem>
            <S.CardCheckIcon />
            <S.CardText>
              Participação ilimitada a eventos e webinars
            </S.CardText>
          </S.CardItem>
          <S.CardItem>
            <S.CardCheckIcon />
            <S.CardText>
              Suporte ao Cliente
            </S.CardText>
          </S.CardItem>
          <S.CardItem>
            <S.CardCheckIcon />
            <S.CardText>
              50.000 Tokens
            </S.CardText>
          </S.CardItem>
        </S.CardTextWrapper>
        <S.CardLine />
        <Button text={'Saiba mais'} />
      </S.CardWrapper>
    </S.Container>
  );
};

export default Benefits;
