import * as S from './styles';
import Button from '../Button/Button';

const Additional = () => {
  return (
    <S.Container>
      <S.Icon />
      <S.RightSection>
        <S.Title>
          Conexão com <S.SpanBlue>problema?</S.SpanBlue>
        </S.Title>
        <S.Ul>
          <S.Li>Aumento da carga de trabalho para compensar a ineficiência.</S.Li>
          <S.Li>Perda de tempo com o treinamento contínuo de pessoas.</S.Li>
          <S.Li>Poucos agendamentos com pouco faturamento.</S.Li>
          <S.Li>Clientes insatisfeitos devido as respostas tardias.</S.Li>
        </S.Ul>
        <Button $_inverse href='#' />
      </S.RightSection>
    </S.Container>
  );
};

export default Additional;
