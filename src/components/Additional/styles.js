import styled from 'styled-components';
import CautionIcon from '../../assets/icons/caution.svg?react';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1.25rem auto 0 auto;
  width: 70%;
`;

export const Icon = styled(CautionIcon)`
  width: 30rem;
  height: 30rem;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.563rem;
`;

export const Title = styled.h2`
  font-size: 2.625rem;
  color: ${({ theme }) => theme.title};
`;

export const SpanBlue = styled.span`
  color: ${({ theme }) => theme.blue};
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-left: 2rem;
`;

export const Li = styled.li`
  font-size: 1.313rem;
  color: ${({ theme }) => theme.title};
  font-weight: 400;
`;
