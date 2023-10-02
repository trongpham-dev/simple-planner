import { StyleSheet, View } from "@react-pdf/renderer";
import TodoRow from "components/TodoCard/TodoRow";
import { COLOR } from "constants/color";
import Heading from "pages/weekly/Weekly3/Heading";

const styles = StyleSheet.create({
  container: {
    color: COLOR.BLACK,
    width: "100%",
    backgroundColor: COLOR.LIGHT_GRAY,
    paddingLeft: 8,
    paddingRight: 8,
    // paddingTop: 8,
  },
  orderContainer: {
    backgroundColor: COLOR.LIGHT_BROWN,
    width: 25,
    textAlign: "center",
    paddingVertical: 2,
  },
});

export default function TodoCard() {
  return (
    <View style={styles.container}>
      <Heading title="WHAT WORKED WELL?" />
      <TodoRow />
      <TodoRow />
      <TodoRow />
      <TodoRow />
      <TodoRow withoutBorder={true} />
    </View>
  );
}
