import { StyleSheet, View } from "@react-pdf/renderer";
import ToDoListItem from "components/TodoList/ToDoListItem";

import Heading from "pages/weekly/Weekly3/Heading";

const styles = StyleSheet.create({
  container: {},
});

export default function TodoList() {
  return (
    <View style={styles.container}>
      <Heading title="TO-DO LIST" />
      <ToDoListItem />
      <ToDoListItem />
      <ToDoListItem />
      <ToDoListItem />
      <ToDoListItem />
      <ToDoListItem />
      <ToDoListItem />
      <ToDoListItem />
    </View>
  );
}
