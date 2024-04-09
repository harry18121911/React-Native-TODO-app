import { StatusBar } from 'expo-status-bar';
import {  StyleSheet , View } from 'react-native';
import Button from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
