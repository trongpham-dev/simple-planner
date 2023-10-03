import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { handleBgColor, handleBorderBottomColor } from "common/plannerRendering";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

type Props = {
  label?: number;
  rowHeight?: number;
};

export default function PriorityRow({ label, rowHeight }: Props) {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    container: {
      borderBottomColor: handleBorderBottomColor(color),
      borderBottomWidth: 1,
      color: ThemeColors.get(color),
      width: "100%",
      height: rowHeight || 20,
      marginTop: 7,
      paddingLeft: 8,
    },
    orderContainer: {
      backgroundColor: handleBgColor(color),
      width: 20,
      textAlign: "center",
      paddingVertical: 2,
      fontSize: 8,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.orderContainer}>
        <Text>{label}</Text>
      </View>
    </View>
  );
}
