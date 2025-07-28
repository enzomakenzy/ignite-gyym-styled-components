import styled, { css } from "styled-components/native";

export const CardContainer = styled.View`
  flex-direction: row;
  background-color: ${ ({ theme }) => theme.COLORS.GRAY[600] };
  padding: 16px 20px;
  margin-bottom: 12px;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
`;

export const ExerciseInfoContainer = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const ExerciseCategory = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.WHITE };
    font-size: ${ theme.FONTSIZES.MD }px;
  `}
  text-transform: uppercase;
`;

export const ExerciseName = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY[100] };
    font-size: ${ theme.FONTSIZES.MD }px;
  `}
`

export const ExerciseTimer = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY[300] };
    font-size: ${ theme.FONTSIZES.MD }px;
  `}
`;