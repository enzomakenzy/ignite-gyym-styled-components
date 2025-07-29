import styled, { css } from "styled-components/native";

type Focused = {
  isFocused: boolean;
  isInvalid: boolean;
}

export const GymInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY[300]
}))<Focused>`
  ${({ theme, isFocused, isInvalid }) => css`
    color: ${ theme.COLORS.WHITE };
    background-color: ${ theme.COLORS.GRAY[700] };
    font-size: ${ theme.FONTSIZES.MD }px;
    border-color: ${ isInvalid ? theme.COLORS.RED : isFocused ? theme.COLORS.GREEN[500] : theme.COLORS.GRAY[700] };
  `};
  height: 52px;
  width: 100%;
  border-radius: 6px;
  padding: 0 16px;
  border-width: 1px;
  border-style: solid;
`;

export const TextError = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.RED };
  `};
  margin-top: 3px;
  margin-bottom: 7px;
`