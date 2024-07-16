import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({$_justify}) => $_justify ? $_justify : 'center'};
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.blue};
  height: 100%;
  width: 100%;
`;

export const LogoText = styled.span`
  margin-left: 0.5rem;
`;

export const LogoImage = styled.img`
  height: 40px;
  width: 40px;
`;
