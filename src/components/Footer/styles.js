import styled from 'styled-components';
import Instagram from '../../assets/icons/instagram.svg?react';
import Facebook from '../../assets/icons/facebook.svg?react';
import Youtube from '../../assets/icons/youtube.svg?react';

export const Container = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.blue};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  margin: 5rem auto;
  gap: 2rem;

  @media (max-width: 903px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 3rem;
    margin: 3rem auto;
  }
`;

export const FlexFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: ${({ $_w }) => $_w ? $_w : 'auto'};

  &:nth-child(n + 2) {
    margin-top: 4.5rem;
  }

  @media (max-width: 903px) {
    width: 90%;

    &:nth-child(n + 2) {
      margin-top: 1.5rem;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: ${(props) => props.$_bold ? '700' : '200'};
  color: ${({ theme }) => theme.title};
`;

export const Span = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.title};
  opacity: .7;
`;

export const Link = styled.a.attrs({
  target: '_blank'
})`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.title};
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const InstagramIcon = styled(Instagram)``;

export const FacebookIcon = styled(Facebook)``;

export const YoutubeIcon = styled(Youtube)``;
