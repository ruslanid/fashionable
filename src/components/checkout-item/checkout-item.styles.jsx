import styled, {css} from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 150px;
  align-items: center;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
`;

const DescriptionStyles = css`
  width: 23%;
  display: flex;
  justify-content: center;
`;

export const ImageWrappingContainer = styled.div`
  ${DescriptionStyles}
  padding-right: 15px;
`;

export const ImageContainer = styled.img`
  height: 100%;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  ${DescriptionStyles}
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
  padding: 0 5px;
`;

export const RemoveContainer = styled.div`
  ${DescriptionStyles}
  padding-left: 12px;
  cursor: pointer;
  color: #5CAAC1;
`;