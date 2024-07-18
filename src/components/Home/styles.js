import styled from 'styled-components';
import Augencio from '../../assets/augencio.png';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.375rem;
  margin: 1.375rem 4.375rem 0 4.375rem;

  @media (max-width: 768px) {
    margin: 1.375rem 0 0 0;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 1066px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.25rem;
  width: 50%;

  @media (max-width: 1066px) {
    width: 90%;
    align-items: center;
    justify-content: center;
  }
`;

export const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title};

  @media (max-width: 1066px) {
    text-align: center;
  }
`;

export const SpanBlue = styled.span`
  color: ${({ theme }) => theme.blue_focus};
`;

export const Subheadline = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.title};

  @media (max-width: 1066px) {
    text-align: center;
  }
`;

export const LeftSection = styled.div`
  background-image: url(${Augencio});
  background-size: cover;
  background-position: center;
  height: 30rem;
  width: 32rem;

  @media (max-width: 768px) {
    width: 22.5rem;
    height: 22.5rem;
  }
`;
