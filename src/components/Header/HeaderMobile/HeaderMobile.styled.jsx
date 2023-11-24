import styled from '@emotion/styled';

export const HeaderMobileEl = styled.header`
  width: 100%;
  height: 50px;
  align-content: center;
`;

export const BurgerBtnEl = styled.button`
  display: block;
  align-items: center;
  padding: 0px;
  border: none;
  background-color: inherit;
  cursor: pointer;

  svg {
    display: block;
    fill: transparent;
    fill: var(--burger-color);
    width: 24px;
    height: 24px;
  }
`;
