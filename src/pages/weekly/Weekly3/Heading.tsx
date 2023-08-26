import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#907B62",
    borderBottomWidth: 1,
    fontStyle: "bold",
    color: "#907B62",
    width: "100%",
    paddingBottom: 4,
    fontSize: 14,
    fontWeight: 700,
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
