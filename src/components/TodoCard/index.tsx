import { StyleSheet, View } from "@react-pdf/renderer";
import Heading from "components/Heading";
import TodoRow from "components/TodoCard/TodoRow";
import { COLOR } from "constants/color";

type Props = {
  title?: string;
};

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

export default function TodoCard({ title }: Props) {
  return (
    <View style={styles.container}>
      <Heading title={title || "WHAT DIDN'T WORK?"} />
      <TodoRow />
      <TodoRow />
      <TodoRow />
      <TodoRow />
      <TodoRow withoutBorder={true} />
    </View>
  );
}
