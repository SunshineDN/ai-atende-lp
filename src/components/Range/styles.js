import styled from 'styled-components';
import RangeSVG from '../../assets/icons/range.svg?react';

export const RangeForm = styled(RangeSVG)`
width: 100vw;
`;

export const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: ${({ theme }) => theme.blue};
  margin: 2rem auto;
  opacity: 0.5;
`;
