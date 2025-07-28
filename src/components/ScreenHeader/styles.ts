import styled, { css } from "styled-components/native";

export const Header = styled.View`
  background-color: ${ ({ theme }) => theme.COLORS.GRAY[600] };
  padding-bottom: 24px;
  padding-top: 64px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY[100] };
    font-size: ${ theme.FONTSIZES.XL }px;
  `}
`;