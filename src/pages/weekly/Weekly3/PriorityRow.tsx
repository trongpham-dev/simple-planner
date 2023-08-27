import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLOR.LIGHT_BROWN,
    borderBottomWidth: 1,
    color: COLOR.BLACK,
    width: "100%",
    height: 20,
    marginTop: 7,
    paddingLeft: 8,
  },
  orderContainer: {
    backgroundColor: COLOR.LIGHT_BROWN,
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
