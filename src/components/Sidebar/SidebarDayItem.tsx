import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

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
  },
  text: {
    fontSize: 10,
    transform: "rotate(90deg)",
  },
});

interface Props {
  month: string;
  src: string;
}

export default function SidebarMonthItem({ month, src }: Props) {
  return (
    <View style={styles.container}>
      <Link src={src}>
        <Text style={styles.text}>{month}</Text>
      </Link>
    </View>
  );
}
