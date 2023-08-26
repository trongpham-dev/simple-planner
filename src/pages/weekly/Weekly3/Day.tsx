import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#EEE7DF",
    borderBottomWidth: 1,
    borderLeftColor: "#907B62",
    borderLeftWidth: 3,
    color: "#907B62",
    width: "100%",
    height: 60,
    marginTop: 8.5,
    paddingLeft: 8,
    fontSize: 13,
  },
});

export default function Day() {
  return (
    <View style={styles.container}>
      <Text>07 Monday</Text>
    </View>
  );
}