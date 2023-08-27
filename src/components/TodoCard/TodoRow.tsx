import { StyleSheet, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLOR.LIGHT_BROWN,
    borderBottomWidth: 1,
    color: COLOR.BLACK,
    width: "100%",
    height: 18,
    marginTop: 8,
    paddingLeft: 12,
  },
  withoutBorderContainer: {
    color: COLOR.BLACK,
    width: "100%",
    height: 18,
    marginTop: 8,
    paddingLeft: 12,
  },
});

type Props = {
  withoutBorder?: boolean;
};

export default function TodoRow({ withoutBorder = false }: Props) {
  return (
    <View
      style={withoutBorder ? styles.withoutBorderContainer : styles.container}
    ></View>
  );
}
