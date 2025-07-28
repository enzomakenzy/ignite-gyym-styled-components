import styled, { css } from "styled-components/native";

interface ButtonActive {
  isActive?: boolean;
  isPressable?: boolean;
}

export const GroupButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})<ButtonActive>`
  ${({ theme, isActive, isPressable }) => css`
    background-color: ${ theme.COLORS.GRAY[600] };
    border-color: ${ isActive || isPressable ? theme.COLORS.GREEN[500] : theme.COLORS.GRAY[600] };
  `};
  border-style: solid;
  border-width: 2px;
  margin-right: 13px;
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
`;

export const TextGroupButton = styled.Text<ButtonActive>`
  ${({ theme, isActive, isPressable }) => css`
    font-family: ${ theme.FONTS.HEADING };
    font-size: ${ theme.FONTSIZES.XS }px;
    color: ${ isActive || isPressable ? theme.COLORS.GREEN[500] : theme.COLORS.GRAY[200] };
    `};
    text-transform: uppercase;
`;