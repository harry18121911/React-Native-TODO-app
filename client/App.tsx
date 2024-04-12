import { ThemeProvider } from '@shopify/restyle';
import theme from './src/components/utils/theme';
import Navigation from './src/navigation/NavigationIndex';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar
          translucent
        />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}


