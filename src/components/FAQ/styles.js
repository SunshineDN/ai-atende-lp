import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  margin: 5rem auto;
  width: 80%;

  @media (max-width: 977px) {
    flex-direction: column;
    width: 90%;
    gap: 3rem;
  }
`;

export const TextWrapper = styled.div`
  display: block;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.title};
`;

export const DetailsContainer = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 977px) {
    width: 100%;
  }
`;

export const Arrow = styled(ChevronDown)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.blue};
  transition: all 0.2s ease;
`;

export const Line = styled.div`
  height: 1px;
  width: 90%;
  background-color: ${({ theme }) => theme.blue};
  margin-bottom: 1rem;
`;

export const Span = styled.span`
  display: block;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.title};
  font-weight: 200;
  width: 90%;
  opacity: .7;
`;

export const Details = styled.details`
  /* margin: 1.3rem 0; */
  width: 100%;
  padding: 1rem 1.3rem;
  transition: all 0.1s ease;
  border: 1px solid ${({theme}) => theme.blue};
  border-radius: .35rem;

  &[open] {
    max-height: 100vh;
  }

  &[open] summary {
    margin-bottom: 1rem;
  }

  &[open] ${Arrow} {
    transform: rotate(-180deg);
  }
`;

export const Summary = styled.summary`
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  gap: 0 1.25rem;
  cursor: pointer;
  outline: none;
  user-select: none;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border: none;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.title};
  transition: all 0.1s ease;
`;
