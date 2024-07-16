import * as S from './styles';
import Button from '../Button/Button';

const Plataform = () => {
  return (
    <S.Container>
      <S.Title>
        Apresentação da solução:
        Conversas Humanizadas integrado ao <S.SpanBlue>Chat GPT</S.SpanBlue>
      </S.Title>
      <S.TextWrapper>
        <S.Text>
          Imagine a tranquilidade de saber que cada interação com seus
          pacientes estão sendo cuidadas de forma eficiente e personalizada,
          sem que você precise se preocupar.
        </S.Text>
        <S.Text>
          A <strong>AI ATENDE</strong> utiliza inteligência artificial para otimizar seu
          processo de atendimento, garantindo que sua agenda esteja sempre cheia.
        </S.Text>
        <S.Text>
          Nossa solução é projetada para entender o que os seus
          pacientes necessitam, pois nosso método foi feito para compreender
          as intenções escritas ou faladas gerando respostas imediatas e os
          conduzindo ao agendamento.
        </S.Text>
      </S.TextWrapper>
      <Button />
    </S.Container>
  );
};

export default Plataform;
