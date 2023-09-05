import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";
import clashDisplay from "../../assets/fonts/ClashDisplay-Regular.ttf";

Font.register({
  family: "Clash Display",
  format: "truetype",
  fontWeight: "normal",
  src: clashDisplay,
});

const styles = StyleSheet.create({
  container: {
    color: COLOR.BLACK,
    paddingBottom: 8,
  },
  heading: {
    fontFamily: "Clash Display",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 30,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
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
