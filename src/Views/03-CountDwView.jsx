import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const CountDwView = () => {
  return (
    <View style={styles.container}>
      <Text>CountDwView</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default CountDwView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});