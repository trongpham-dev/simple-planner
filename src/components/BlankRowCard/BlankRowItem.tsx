import { StyleSheet, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { handleBorderBottomColor } from "common/plannerRendering";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

type Props = {
  rowMarginTop?: number;
};

export default function BlankRowItem({ rowMarginTop }: Props) {
  const { color } = useSelector(selectTheme());
  const styles = StyleSheet.create({
    container: {
      borderBottomColor: handleBorderBottomColor(color),
      borderBottomWidth: 1,
      color: ThemeColors.get(color),
      width: "100%",
      height: 20,
      marginTop: rowMarginTop || 7,
      paddingLeft: 8,
    },
  });
  return <View style={styles.container}></View>;
}
