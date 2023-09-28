import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";
import { Moment } from "moment";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLOR.LIGHT_BROWN,
    borderBottomWidth: 1,
    borderLeftColor: COLOR.BROWN,
    borderLeftWidth: 3,
    color: COLOR.BROWN,
    width: "100%",
    height: 60,
    marginTop: 8.5,
    paddingLeft: 8,
    fontSize: 13,
  },
  number: {
    fontWeight: 700,
    marginRight: 6,
  },
  text: {
    fontWeight: 400,
  },
});

interface Props {
  day: Moment;
}

export default function Day({ day }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{day.format("DD")}</Text>
      <Text style={styles.text}>{day.format("dddd")}</Text>
    </View>
  );
}
