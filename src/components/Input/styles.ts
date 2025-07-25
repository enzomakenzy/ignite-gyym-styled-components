import styled, { css } from "styled-components/native";

type Focused = {
  isFocused: boolean
}

export const GymInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY[300]
}))<Focused>`
  ${({ theme, isFocused }) => css`
    color: ${ theme.COLORS.WHITE };
    background-color: ${ theme.COLORS.GRAY[700] };
    font-size: ${ theme.FONTSIZES.MD }px;
    border-color: ${ isFocused ? theme.COLORS.GREEN[500] : theme.COLORS.GRAY[700] };
  `};
  height: 64px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 6px;
  padding: 0 16px;
  border-width: 1px;
  border-style: solid;
`;