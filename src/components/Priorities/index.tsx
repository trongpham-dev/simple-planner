import { StyleSheet, View } from "@react-pdf/renderer";

import Heading from "pages/weekly/Weekly3/Heading";
import PriorityRow from "pages/weekly/Weekly3/PriorityRow";

const styles = StyleSheet.create({
  container: {},
});

export default function Priorities() {
  return (
    <View style={styles.container}>
      <Heading title="WEEK’S PRIORITIES" />
      <PriorityRow />
      <PriorityRow />
      <PriorityRow />
      <PriorityRow />
      <PriorityRow />
      <PriorityRow />
      <PriorityRow />
      <PriorityRow />
    </View>
  );
}
