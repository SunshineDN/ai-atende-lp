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
`;

export const FlexFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: ${({ $_w }) => $_w ? $_w : 'auto'};
`;

export const Text = styled.p`
  font-size: 1.313rem;
  font-weight: ${(props) => props.$_bold ? '700' : '400'};
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
  text-decoration: none;
  font-size: 1.313rem;
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
