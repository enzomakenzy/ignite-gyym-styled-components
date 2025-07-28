import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const HeaderList = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY[200] };
    font-size: ${ theme.FONTSIZES.MD };
  `}
  margin-top: 40px;
  margin-bottom: 12px;
`;

export const ListEmptyText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`