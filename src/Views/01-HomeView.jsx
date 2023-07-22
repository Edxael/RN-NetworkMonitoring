import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Text>HomeView</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});