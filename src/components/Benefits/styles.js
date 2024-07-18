import styled from 'styled-components';
import BenefitsIcon from '../../assets/icons/benefits_icon.svg?react';
import Check from '../../assets/icons/check.svg?react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
  width: 65%;
  gap: 3.25rem;

  @media (max-width: 460px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 2.625rem;
  color: ${({ theme }) => theme.title};
  text-align: center;
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.title};
  text-align: center;
  font-weight: 400;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 3rem 2.275rem;
  position: relative;
  border-radius: 1.7rem;
  border: 1px solid ${({ theme }) => theme.blue};
  width: 25rem;
  background: linear-gradient(0deg, #32A3E5 0%, rgba(24, 24, 28, 0.3) 40%);

  & button {
    color: ${({ theme }) => theme.background};
    font-weight: 600;
  }

  @media (max-width: 460px) {
    width: 100%;
  }
`;

export const CardIcon = styled(BenefitsIcon)`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const CardTitle = styled.h3`
  font-size: 1.625rem;
  color: ${({ theme }) => theme.title};
  font-weight: 700;
  text-align: center;
  width: 100%;
  justify-content: space-between;
`;

export const CardLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.blue};
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const CardItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const CardCheckIcon = styled(Check)`
  width: 2rem;
  height: 2rem;
`;

export const CardText = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.title};
  font-weight: 400;
  flex: 1;
`;
