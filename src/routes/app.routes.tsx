import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";
import { Exercise } from "@screens/Exercise";

import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "styled-components/native";

type AppRoutes = {
  home: undefined;
  exercise: undefined;
  profile: undefined;
  history: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const theme = useTheme();

  const insets = useSafeAreaInsets();
  const iconSize = theme.SIZES[6];

  return (
    <Navigator screenOptions={{ 
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.COLORS.GREEN[500],
      tabBarInactiveTintColor: theme.COLORS.GRAY[200],
      tabBarStyle: {
        backgroundColor: theme.COLORS.GRAY[600],
        borderTopWidth: 0,
        height: 50 + insets.bottom,
      },
      tabBarButton: (props: any) => (
        <TouchableOpacity {...props} style={{ justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }} activeOpacity={1} />
      )
    }}>
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen 
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen 
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen 
        name="exercise"
        component={Exercise}
        options={{
          tabBarItemStyle: ({ display: "none" })
        }}
      />
    </Navigator>
  );
}