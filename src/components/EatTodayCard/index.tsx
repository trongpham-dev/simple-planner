import { StyleSheet, View } from "@react-pdf/renderer";
import { handleBorderBottomColor } from "common/plannerRendering";
import BlankRowItem from "components/BlankRowCard/BlankRowItem";
import BlankRowItemWithIcon from "components/BlankRowCard/BlankRowItemWithIcon";

import Heading from "pages/weekly/Weekly3/Heading";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

type Props = {
  totalRow: number;
};

export default function EatTodayCard({ totalRow }: Props) {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    container: {
      borderColor: handleBorderBottomColor(color),
      borderWidth: 1,
      height: "100%",
      paddingTop: 4,
      paddingHorizontal: 4,
    },
  });
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
