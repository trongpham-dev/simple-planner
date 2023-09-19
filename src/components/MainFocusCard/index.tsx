import { StyleSheet, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

import Heading from "pages/weekly/Weekly3/Heading";

const styles = StyleSheet.create({
  container: {
    borderColor: COLOR.EXTRA_LIGHT_BROWN_2,
    borderWidth: 1,
    height: "100%",
    // paddingTop: 4,
    paddingHorizontal: 4,
  },
});

export default function MainFocusCard() {
  return (
    <View style={[styles.container]}>
      <Heading title="MAIN FOCUS" />
    </View>
  );
}
