import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";

import PageDateTitle from "components/PageDateTitle";
import DayCard from "pages/weekly/Weekly1/DayCard";
import Notes from "pages/weekly/Weekly3/Notes";

const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 20,
  },
  container: {
    marginTop: 4,
    width: "100%",
  },
  top: {
    height: "50%",
    marginBottom: 12,
    flexDirection: "row",
  },
  bottom: {
    height: "50%",
    flexDirection: "row",
  },
  card: {
    width: "25%",
    height: "100%",
    marginRight: "12",
  },
  withoutMargin: {
    marginRight: 0,
  },
});

export const Weekly1 = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View>{/* <PageDateTitle /> */}</View>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.card}>
              <DayCard />
            </View>
            <View style={styles.card}>
              <DayCard />
            </View>
            <View style={styles.card}>
              <DayCard />
            </View>
            <View style={[styles.card, styles.withoutMargin]}>
              <DayCard />
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.card}>
              <DayCard />
            </View>
            <View style={styles.card}>
              <DayCard />
            </View>
            <View style={styles.card}>
              <DayCard />
            </View>
            <View style={[styles.card, styles.withoutMargin]}>
              <Notes />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
