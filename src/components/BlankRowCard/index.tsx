import { StyleSheet, View } from "@react-pdf/renderer";
import BlankRowItem from "components/BlankRowCard/BlankRowItem";
import Heading from "components/Heading";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
});

type Props = {
  totalRow: number;
  customStyles?: any;
  rowMarginTop?: number;
};

export default function BlankRowCard({ totalRow, customStyles, rowMarginTop }: Props) {
  return (
    <View style={[styles.container, customStyles]}>
      <Heading title="MOVING TO TOMORROW" />
      {Array(totalRow)
        .fill(1)
        .map((_, i) => (
          <BlankRowItem key={i} rowMarginTop={rowMarginTop} />
        ))}
    </View>
  );
}
