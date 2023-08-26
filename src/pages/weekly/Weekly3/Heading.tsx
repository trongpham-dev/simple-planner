import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#907B62",
    borderBottomWidth: 1,
    fontStyle: "bold",
    color: "#907B62",
    width: "100%",
    paddingBottom: 8,
    fontFamily: "Clash Display",
  },
});

type Props = {
  title: string;
};

export default function Heading({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}
