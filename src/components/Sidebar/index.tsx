import { StyleSheet, View } from "@react-pdf/renderer";
import SidebarMonthItem from "components/Sidebar/SidebarDayItem";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.GRAY,
    height: "100%",
    paddingVertical: 6,
  },
});

export default function Sidebar() {
  return (
    <View style={styles.container}>
      <SidebarMonthItem />
      <SidebarMonthItem />
      <SidebarMonthItem />
      <SidebarMonthItem />
      <SidebarMonthItem />
      <SidebarMonthItem />
      <SidebarMonthItem />
      <SidebarMonthItem />
      <SidebarMonthItem />
      <SidebarMonthItem />
      <SidebarMonthItem />
      <SidebarMonthItem />
    </View>
  );
}
