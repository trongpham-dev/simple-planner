import { StyleSheet, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { COLOR } from "constants/color";
import { ColorType } from "models/enum";
import Heading from "pages/weekly/Weekly3/Heading";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

export default function Notes() {
  const { color } = useSelector(selectTheme());
  const handleBgColor = () => {
    if (color === ColorType.Primary) {
      return COLOR.LIGHT_BROWN;
    }
    if (color === ColorType.Secondary) {
      return "#e4e8d8";
    }
    return "#f4e8fA";
  };
  const styles = StyleSheet.create({
    container: {
      color: ThemeColors.get(color),
      width: "100%",
      height: "100%",
      paddingVertical: 0,
      paddingHorizontal: 8,
      backgroundColor: handleBgColor(),
    },
  });
  return (
    <View style={styles.container}>
      <Heading title="NOTES" />
    </View>
  );
}
