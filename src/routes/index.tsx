import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { useAuth } from "src/hooks/useAuth";

import styled, { useTheme } from "styled-components/native";
import { useContext } from "react";

export function Routes() {
  const theme = useTheme();
  const themeNavigation = DefaultTheme;
  themeNavigation.colors.background = theme.COLORS.GRAY[700];

  const { user } = useAuth();
  console.log("Usuário logado => ", user);

  return (
    <SafeAreaProvider>
      <Box>
        <NavigationContainer theme={themeNavigation}>
          <AuthRoutes />
        </NavigationContainer>
      </Box>
    </SafeAreaProvider>
  )
}

const Box = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY[700]};
`;  