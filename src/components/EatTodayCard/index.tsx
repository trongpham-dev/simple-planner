import { Image, Path, StyleSheet, Svg, View } from "@react-pdf/renderer";
import { WaterIcon } from "assets/images/svg-icons";
import BlankRowItem from "components/BlankRowCard/BlankRowItem";
import BlankRowItemWithIcon from "components/BlankRowCard/BlankRowItemWithIcon";
import { COLOR } from "constants/color";

import Heading from "pages/weekly/Weekly3/Heading";

const styles = StyleSheet.create({
  container: {
    borderColor: COLOR.EXTRA_LIGHT_BROWN_2,
    borderWidth: 1,
    height: "100%",
    paddingHorizontal: 4,
  },
});

type Props = {
  totalRow: number;
};

export default function EatTodayCard({ totalRow }: Props) {
  return (
    <View style={[styles.container]}>
      <Heading title="WHAT I EAT TODAY?" />
      {Array(totalRow)
        .fill(1)
        .map((_, i) => (
          <BlankRowItem key={i} />
        ))}
      {/* <Image src={WaterIcon} /> */}
      <BlankRowItemWithIcon />
    </View>
  );
}
