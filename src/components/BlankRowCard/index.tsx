import { StyleSheet, View } from "@react-pdf/renderer";
import BlankRowItem from "components/BlankRowCard/BlankRowItem";

import Heading from "pages/weekly/Weekly3/Heading";

const styles = StyleSheet.create({
  container: {},
});

export default function BlankRowCard() {
  return (
    <View style={styles.container}>
      <Heading title="MOVING TO TOMORROW" />
      <BlankRowItem />
      <BlankRowItem />
      <BlankRowItem />
      <BlankRowItem />
      <BlankRowItem />
      <BlankRowItem />
      <BlankRowItem />
    </View>
  );
}
