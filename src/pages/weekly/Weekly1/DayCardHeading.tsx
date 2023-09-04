import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLOR.BROWN,
    borderBottomWidth: 1,
    fontStyle: "bold",
    color: COLOR.BROWN,
    width: "100%",
    paddingBottom: 4,
    fontSize: 13,
    fontWeight: 700,
    flexDirection: "row",
  },
  number: {
    marginRight: 6,
  },
});

export default function DayCardHeading() {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>09</Text>
      <Text>Wednesday</Text>
    </View>
  );
}
