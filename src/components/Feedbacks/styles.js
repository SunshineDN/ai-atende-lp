import styled from 'styled-components';
import Star from '../../assets/icons/star.svg?react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 5rem auto;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.title};

  &:nth-child(2){
    text-align: center;
  }
`;

export const CardSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 1316px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  padding: 1.25rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.165rem;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 4px 8px 0px rgba(56, 182, 255, 0.20);
  background: linear-gradient(106deg, rgba(3, 4, 16, 0.20) -7.62%, rgba(30, 35, 95, 0.20) 100.69%);
  border-radius: 1.375rem;
  width: 38rem;
  height: 21rem;

  @media (max-width: 630px) {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.title};
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 422px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .675rem;
`;

export const ProfileIcon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 10rem;
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ProfileInfo = styled.div`
  display: block;
`;

export const ProfileName = styled.p`
  font-size: 1.313rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
`;

export const ProfileRule = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.title};
  opacity: .6;
`;

export const StarWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .375rem;
`;

export const StarIcon = styled(Star)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.265rem;
`;

export const Button = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 10rem;
  ${({ $_active, theme }) => $_active ? `background: linear-gradient(93deg, ${theme.blue} 0.48%, ${theme.background} 100%);` : 'background-color: #18181C;'};
`;
