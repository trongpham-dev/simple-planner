import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#EEE7DF",
    borderBottomWidth: 1,
    color: "#3D3429",
    width: "100%",
    height: 20,
    marginTop: 7,
    paddingLeft: 8,
  },
  orderContainer: {
    backgroundColor: "#EEE7DF",
    width: 20,
    textAlign: "center",
    paddingVertical: 2,
    fontSize: 8,
  },
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
