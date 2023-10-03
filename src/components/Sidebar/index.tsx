import { StyleSheet, View } from "@react-pdf/renderer";
import SidebarMonthItem from "components/Sidebar/SidebarDayItem";
import { COLOR } from "constants/color";

interface Props {
  portraitPaddingVertical?: number;
}

export default function Sidebar({ portraitPaddingVertical }: Props) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLOR.GRAY,
      height: "100%",
      paddingVertical: 20,
    },
  });

  const monthLinks = [
    {
      month: "JAN",
      src: "#0-0",
    },
    {
      month: "FEB",
      src: "#1-0",
    },
    {
      month: "MAR",
      src: "#2-0",
    },
    {
      month: "APR",
      src: "#3-0",
    },
    {
      month: "MAY",
      src: "#4-0",
    },
    {
      month: "JUN",
      src: "#5-0",
    },
    {
      month: "JUL",
      src: "#6-0",
    },
    {
      month: "AUG",
      src: "#7-0",
    },
    {
      month: "SEP",
      src: "#8-0",
    },
    {
      month: "OCT",
      src: "#9-0",
    },
    {
      month: "NOV",
      src: "#10-0",
    },
    {
      month: "DEC",
      src: "#11-0",
    },
  ];

  return (
    <View style={styles.container}>
      {monthLinks.map((m, i) => (
        <SidebarMonthItem month={m.month} src={m.src} key={i} portraitPaddingVertical={portraitPaddingVertical} />
      ))}
    </View>
  );
}
