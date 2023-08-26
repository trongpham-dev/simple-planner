import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    color: COLOR.BLACK,
    paddingBottom: 8,
  },
  heading: {
    fontStyle: "bold",
    fontSize: 30,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
  },
});

export default function PageDateTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>August 2023</Text>
      <Text style={styles.description}>07 august - 13 August</Text>
    </View>
  );
}
