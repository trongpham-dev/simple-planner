import { StyleSheet, View } from "@react-pdf/renderer";
import ToDoListItem from "components/TodoList/ToDoListItem";

import Heading from "pages/weekly/Weekly3/Heading";

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
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
