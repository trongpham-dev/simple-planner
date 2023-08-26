import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#EEE7DF',
    borderBottomWidth: 1,
    borderLeftColor: '#907B62',
    borderLeftWidth: 3,
    color: '#907B62',
    width: '100%',
    height: 80,
    marginTop: 22,
    paddingLeft: 12
  }
});

export default function Day() {
  return (
    <View style={styles.container}>
      <Text>07 Monday</Text>
    </View>
  );
}
