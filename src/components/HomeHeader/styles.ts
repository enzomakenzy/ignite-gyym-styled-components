import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY[600]};
  padding: 64px 32px 20px;
  align-items: center;
  flex-direction: row;
`;

export const UserImage = styled.Image`
  margin-right: 16px;
  height: 64px;
  width: 64px;
  border-radius: 9999px;
`

export const InfoUserContainer = styled.View`
  flex: 1;
`;

export const HelloText = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY[100] };
    font-size: ${ theme.FONTSIZES.MD }px;
  `};
`;

export const LogoutButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.55
})``

export const LogoutIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 26,
  color: theme.COLORS.GRAY[200]
}))``