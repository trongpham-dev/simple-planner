import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

type Props = {
  title: string;
};

export default function Heading({ title }: Props) {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    container: {
      borderBottomColor: ThemeColors.get(color),
      borderBottomWidth: 1,
      color: ThemeColors.get(color),
      width: "100%",
      paddingBottom: 4,
      marginTop: 8,
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: 0.24,

      "@media orientation: portrait": {
        fontSize: 11,
      },
    },
  });
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}
