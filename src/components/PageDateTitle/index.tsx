import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    color: COLOR.BLACK,
    paddingBottom: 8,
  },
  heading: {
    fontWeight: 500,
    fontSize: 30,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  description: {
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: 400,
  },
});

interface Props {
  heading: string;
  description: string;
}

export default function PageDateTitle({ heading, description }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
