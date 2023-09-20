import { StyleSheet, View } from "@react-pdf/renderer";
import { handleBorderBottomColor } from "common/plannerRendering";

import Heading from "pages/weekly/Weekly3/Heading";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

export default function MainFocusCard() {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    container: {
      borderColor: handleBorderBottomColor(color),
      borderWidth: 1,
      height: "100%",
      // paddingTop: 4,
      paddingHorizontal: 4,
    },
  });
  return (
    <View style={[styles.container]}>
      <Heading title="MAIN FOCUS" />
    </View>
  );
}
