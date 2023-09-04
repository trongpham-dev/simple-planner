import { StyleSheet, View } from "@react-pdf/renderer";

import Heading from "pages/weekly/Weekly3/Heading";
import PriorityRow from "pages/weekly/Weekly3/PriorityRow";

const styles = StyleSheet.create({
  container: {},
});

type Props = {
  totalRow: number;
};

export default function Priorities({ totalRow }: Props) {
  return (
    <View style={styles.container}>
      <Heading title="WEEK’S PRIORITIES" />
      {Array(totalRow)
        .fill(1)
        .map((_, i) => (
          <PriorityRow />
        ))}
    </View>
  );
}
