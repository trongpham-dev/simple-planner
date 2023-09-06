import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLOR.LIGHT_BROWN,
    borderBottomWidth: 1,
    color: COLOR.BLACK,
    width: "100%",
    height: 19,
    marginTop: 8,
  },
  time: {
    position: "absolute",
    backgroundColor: COLOR.LIGHT_BROWN,
    borderRadius: 6,
    fontSize: 8,
    width: 30,
    height: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    // left: -40,
  },
});

interface Props {
  timeSchedule: string;
}

export default function TimeScheduleRow({ timeSchedule }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.time} debug={false}>
        <Text>{timeSchedule}</Text>
      </View>
    </View>
  );
}
