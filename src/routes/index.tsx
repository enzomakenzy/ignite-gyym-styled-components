import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { SafeAreaProvider } from "react-native-safe-area-context";

import styled, { useTheme } from "styled-components/native";

export function Routes() {
  const theme = useTheme();
  const themeNavigation = DefaultTheme;
  themeNavigation.colors.background = theme.COLORS.GRAY[700];

  return (
    <SafeAreaProvider>
      <Box>
        <NavigationContainer theme={themeNavigation}>
          <AppRoutes />
        </NavigationContainer>
      </Box>
    </SafeAreaProvider>
  )
}

const Box = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY[700]};
`;  