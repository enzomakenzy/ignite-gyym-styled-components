import { StatusBar } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from '@themes/MainTheme';
import { ThemeProvider } from 'styled-components';

import { Routes } from '@routes/index';

import { Loading } from '@components/Loading';

import { AuthContextProvider } from '@contexts/AuthContext';

import Toast from 'react-native-toast-message';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <AuthContextProvider>
        { fontsLoaded ? <Routes /> : <Loading /> }
      </AuthContextProvider>
      <Toast />
    </ThemeProvider>
  );
}


