import { StyleSheet, View } from "@react-pdf/renderer";
import Heading from "components/Heading";
import ToDoListItem from "components/TodoList/ToDoListItem";

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});

type Props = {
  totalRow: number;
};

export default function TodoList({ totalRow }: Props) {
  return (
    <View style={styles.container}>
      <Heading title="TO-DO LIST" />
      {Array(totalRow)
        .fill(1)
        .map((_, i) => (
          <ToDoListItem key={i} />
        ))}
    </View>
  );
}
