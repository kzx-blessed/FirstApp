import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc0634',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#25292e',
  },
});
