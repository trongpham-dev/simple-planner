import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { COLOR } from "constants/color";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

interface Props {
  month: string;
  src: string;
  portraitPaddingVertical?: number;
}

export default function SidebarMonthItem({ month, src, portraitPaddingVertical }: Props) {
  const { color } = useSelector(selectTheme());
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: COLOR.WHITE_2,
      paddingVertical: 17,
      width: 25,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      marginBottom: 1,
      justifyContent: "center",
      alignItems: "center",

      "@media orientation: portrait": {
        paddingVertical: portraitPaddingVertical || 27,
      },
    },
    text: {
      fontSize: 10,
      transform: "rotate(90deg)",
    },
    link: {
      textDecoration: "none",
      color: ThemeColors.get(color),
    },
  });

  return (
    <View style={styles.container}>
      <Link src={src} style={styles.link}>
        <Text style={styles.text}>{month}</Text>
      </Link>
    </View>
  );
}
