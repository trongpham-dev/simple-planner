import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Heading from "pages/weekly/Weekly3/Heading";

const styles = StyleSheet.create({
  container: {
    color: "#907B62",
    width: "100%",
    height: "100%",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#EEE7DF",
  },
});

export default function Notes() {
  return (
    <View style={styles.container}>
      <Heading title="NOTES" />
    </View>
  );
}
