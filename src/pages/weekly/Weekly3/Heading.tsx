import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLOR.BROWN,
    borderBottomWidth: 1,
    fontStyle: "normal",
    color: COLOR.BROWN,
    width: "100%",
    paddingBottom: 4,
    fontSize: 12,
    fontWeight: 700,
  },
});

type Props = {
  title: string;
};

export default function Heading({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}
