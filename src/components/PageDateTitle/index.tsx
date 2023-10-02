import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

interface Props {
  heading: string;
  description: string;
}

export default function PageDateTitle({ heading, description }: Props) {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    container: {
      color: ThemeColors.get(color),
      paddingBottom: 4,
    },
    heading: {
      fontWeight: 700,
      fontSize: 30,
      marginBottom: 6,

      "@media orientation: portrait": {
        marginBottom: 4,
      },
    },
    description: {
      fontSize: 12,
      textTransform: "uppercase",
      fontWeight: 400,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
