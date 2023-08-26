import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#EEE7DF',
    borderBottomWidth: 1,
    color: '#3D3429',
    width: '100%',
    height: 30,
    marginTop: 12,
    paddingLeft: 12
  },
  orderContainer: {
    backgroundColor: '#EEE7DF',
    width: 25,
    textAlign: 'center',
    paddingVertical: 2
  }
});

export default function PriorityRow() {
  return (
    <View style={styles.container}>
      <View style={styles.orderContainer}>
        <Text>1</Text>
      </View>
    </View>
  );
}
