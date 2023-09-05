import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";
import moment, { Moment } from "moment";

const styles = StyleSheet.create({
  container: {
    width: "15%",
    height: "100%",
    borderRightColor: COLOR.LIGHT_BROWN,
    borderRightWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  withoutBorderContainer: {
    width: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: 400,
  },
  number: {
    fontSize: 12,
    marginRight: 3,
    fontWeight: 600,
  },
});

type Props = {
  withoutBorder?: boolean;
  day: Moment;
};

const TimeTableHeaderItem = ({ withoutBorder = false, day }: Props) => {
  return (
    <View
      style={withoutBorder ? styles.withoutBorderContainer : styles.container}
    >
      <Text style={styles.number}>{day.format("DD")}</Text>
      <Text style={styles.title}>{day.format("dddd")}</Text>
    </View>
  );
};

export default TimeTableHeaderItem;
