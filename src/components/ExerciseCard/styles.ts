import styled, { css } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const CardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.55
})`
  background-color: ${({ theme }) => theme.COLORS.GRAY[500]};
  align-items: center;
  padding: 8px;
  padding-right: 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  flex-direction: row;
`;

export const ExerciseImage =  styled.Image.attrs({
  resizeMode: "cover"
})`
  margin-right: 16px;
  width: 64px;
  height: 64px;
  border-radius: 6px;
`; 

export const ExerciseInfo = styled.View`
  flex: 1;
`; 

export const ExerciseName = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.WHITE };
    font-size: ${ theme.FONTSIZES.LG }px;
  `};
`;

export const ExerciseRepetitions = styled.Text`
  ${({ theme }) => css`
    font-size: ${ theme.FONTSIZES.SM }px;
    color: ${ theme.COLORS.GRAY[200] };
  `};
  margin-top: 4px;
`;

export const RightIcon = styled(AntDesign).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY[300],
  size: 18
}))``