import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0px 40px;
`;

export const PeopleTrainingImage = styled.Image`
  position: absolute;
`;

export const LogoContainer = styled.View`
  margin: 128px 0px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY[100]};
    font-size: ${theme.FONTSIZES.SM}px;
    font-family: ${theme.FONTS.BODY};
  `};
`;

export const FormContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 140px;
`;

export const FormTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY[100]};
    font-size: ${theme.FONTSIZES.XL}px;
    font-family: ${theme.FONTS.HEADING};
  `};
  margin-bottom: 20px;
`;

export const ToSignUpTitle = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY[100] };
    font-size: ${ theme.FONTSIZES.SM }px;
    font-family: ${ theme.FONTS.BODY };
  `};
  text-align: center;
`;

