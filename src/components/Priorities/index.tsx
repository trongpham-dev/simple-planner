import { StyleSheet, View } from "@react-pdf/renderer";
import Heading from "components/Heading";

import PriorityRow from "pages/weekly/Weekly3/PriorityRow";

const styles = StyleSheet.create({
  container: {},
});

type Props = {
  totalRow: number;
  heading?: string;
  rowHeight?: number;
};

export default function Priorities({ totalRow, heading, rowHeight }: Props) {
  return (
    <View style={styles.container}>
      <Heading title={heading || "WEEK’S PRIORITIES"} />
      {Array.from({ length: totalRow }, (_, index) => index + 1).map((item, i) => (
        <PriorityRow key={i} label={item} rowHeight={rowHeight} />
      ))}
    </View>
  );
}
