import { StyleSheet, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";
import { ColorType } from "models/enum";
import { Moment } from "moment";
import DayCardBlankRow from "pages/weekly/Weekly1/DayCardBlankRow";
import DayCardHeading from "pages/weekly/Weekly1/DayCardHeading";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

interface Props {
  day: Moment;
  customStyles?: any;
}
export default function DayCard({ day, customStyles }: Props) {
  const { color } = useSelector(selectTheme());

  const handleBgColor = () => {
    if (color === ColorType.Primary || color === ColorType.Secondary) {
      return COLOR.EXTRA_LIGHT_BROWN;
    }
    return "#f9f5fb";
  };

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      paddingVertical: 8,
      paddingHorizontal: 8,
      backgroundColor: handleBgColor(),
    },
  });

  return (
    <View style={[styles.container, customStyles]}>
      <DayCardHeading day={day} />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
    </View>
  );
}
