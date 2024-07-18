import styled, { keyframes } from 'styled-components';
import { ArrowRight } from 'lucide-react';

const pushRight = keyframes`
  0% {
    right: 1.25rem;
  } 50% {
    right: .95rem;
  } 100% {
    right: 1.25rem;
  }
`;

export const ButtonContainer = styled.a.attrs({
  target: '_blank'
})`
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  background-color: ${(props) => (props.$_inverse ? 'transparent' : props.theme.blue)};
  border: ${(props) => (props.$_inverse ? `2px solid ${props.theme.title}` : 'none')};
  border-radius: 10rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.blue_focus};
  }
`;

export const InputWrapper = styled.span`
  position: relative;
  width: 100%;
`;

export const Input = styled.input.attrs({
  type: 'email'
})`
  background-color: transparent;
  padding: 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.title};
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 1rem;
  width: 100%;
  outline: none;

  &::placeholder{
    color: ${({ theme }) => theme.title};
    opacity: .7;
  }
`;

export const ArrowIcon = styled(ArrowRight)`
  width: 1.7rem;
  height: 1.7rem;
  color: ${({ theme }) => theme.blue};
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  
  &:hover{
    animation: ${pushRight} .5s ease-in-out infinite;
  }
`;
