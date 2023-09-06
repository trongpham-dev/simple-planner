import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLOR.WHITE_2,
    paddingVertical: 17,
    width: 25,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 10,
    transform: "rotate(90deg)",
  },
});

export default function SidebarMonthItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>JAN</Text>
    </View>
  );
}
