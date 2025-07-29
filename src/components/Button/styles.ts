import styled, { css } from "styled-components/native";

type Variant = {
  isVariant?: boolean
  isPressable?: boolean
}

export const GymButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})<Variant>`
  ${({ theme, isVariant, isPressable }) => css`
    font-family: ${ theme.FONTS.HEADING };
    border-width: ${ isVariant ? 2 : 0 }px;
    background-color: ${ isVariant ?  
      isPressable ? theme.COLORS.GRAY[600] : theme.COLORS.GRAY[700] 
      :
      isPressable ? theme.COLORS.GREEN[500] : theme.COLORS.GREEN[700]
    };
    border-color: ${ isVariant ? theme.COLORS.GREEN[700] : "" };
  `};
    height: 52px;
    border-radius: 6px;
    border-style: solid;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const TextGymButton = styled.Text<Variant>`
  ${({ theme, isVariant }) => css`
    font-family: ${ theme.FONTS.HEADING };
    font-size: ${ theme.FONTSIZES.SM }px;
    color: ${ isVariant ? theme.COLORS.GREEN[500] : theme.COLORS.WHITE }
  `};
`;