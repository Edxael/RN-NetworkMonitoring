import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const TimerView = () => {
  return (
    <View style={styles.container}>
      <Text>TimerView</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default TimerView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});