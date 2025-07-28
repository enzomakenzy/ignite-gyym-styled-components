import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ExercisesContainer = styled.View`
  flex: 1;
  padding: 0px 32px;
`;

export const HeadingExercises = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

export const TitleExercise = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY[200] };
    font-size: ${ theme.FONTSIZES.MD }px;
  `};
`;

export const CounterExercise = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY[200] };
    font-size: ${ theme.FONTSIZES.MD }px;
  `};
`;