import { StyleSheet, View } from "@react-pdf/renderer";
import { LunchIcon, WaterIcon } from "assets/images/svg-icons";
import { handleBorderBottomColor } from "common/plannerRendering";
import BlankRowItemWithIcon from "components/BlankRowCard/BlankRowItemWithIcon";
import Heading from "components/Heading";

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
      paddingHorizontal: 4,
    },
  });
  return (
    <View style={[styles.container]}>
      <Heading title="WHAT I EAT TODAY?" />
      {Array(totalRow)
        .fill(1)
        .map((_, i) => (
          <BlankRowItemWithIcon
            key={i}
            icon={<LunchIcon />}
            customStyles={{ borderBottomColor: handleBorderBottomColor(color), borderBottomWidth: 1 }}
          />
        ))}
      <BlankRowItemWithIcon icon={<WaterIcon />} />
    </View>
  );
}
