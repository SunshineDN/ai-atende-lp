import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem auto 0 auto;
  width: 65%;
  gap: 3.25rem;
`;

export const Title = styled.h1`
  font-size: 2.625rem;
  color: ${({ theme }) => theme.title};
  text-align: center;
  font-weight: 700;
  width: 90%;
`;

export const SpanBlue = styled.span`
  color: ${({ theme }) => theme.blue};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Text = styled.p`
  font-size: 1.313rem;
  color: ${({ theme }) => theme.title};
  text-align: left;
  font-weight: 400;
`;
