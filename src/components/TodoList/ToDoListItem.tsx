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
    width: 15,
    height: 15,
    borderRadius: "50%",
    borderColor: COLOR.BROWN,
    borderWidth: 1,
    textAlign: "center",
    paddingVertical: 2,
    fontSize: 8,
  },
});

export default function ToDoListItem() {
  return (
    <View style={styles.container}>
      <View style={styles.orderContainer}></View>
    </View>
  );
}
