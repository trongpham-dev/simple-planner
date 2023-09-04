import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    fontStyle: "bold",
    color: COLOR.BROWN,
    width: "100%",
    fontSize: 12,
    fontWeight: 700,
    flexDirection: "row",
    backgroundColor: COLOR.EXTRA_LIGHT_BROWN,
    height: 30,
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    width: "170",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  right: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  line: {
    width: 1,
    height: "100%",
    backgroundColor: COLOR.EXTRA_LIGHT_BROWN_2,
  },
  input: {
    borderBottomColor: COLOR.EXTRA_LIGHT_BROWN_2,
    borderBottomWidth: 1,
    width: 50,
    textAlign: "right",
    fontSize: 10,
    paddingBottom: 2,
  },
});

export default function DetailHeading() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>WOKE UP AT</Text>
        <Text style={styles.input}>a.m</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.right}>
        <Text>HOURS SLEPT</Text>
        <Text style={styles.input}>hrs</Text>
      </View>
    </View>
  );
}
