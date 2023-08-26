import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";

import Heading from "pages/weekly/Weekly3/Heading";
import Notes from "pages/weekly/Weekly3/Notes";
import PriorityRow from "pages/weekly/Weekly3/PriorityRow";
import Day from "pages/weekly/Weekly3/Day";
import PageDateTitle from "components/PageDateTitle";

const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 20,
  },
  container: {
    flexDirection: "row",
    marginTop: 4,
    width: "100%",
  },
  left: {
    flexGrow: 1,
    marginRight: 16,
  },
  right: {
    width: "30%",
    height: "100%",
  },
  priorities: {
    height: "50%",
  },
  notes: {
    height: "50%",
  },
});

export const Weekly3 = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View>
          <PageDateTitle />
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <Heading title="SCHEDULE" />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
          </View>
          <View style={styles.right}>
            <View style={styles.priorities}>
              <Heading title="WEEK’S PRIORITIES" />
              <PriorityRow />
              <PriorityRow />
              <PriorityRow />
              <PriorityRow />
              <PriorityRow />
              <PriorityRow />
              <PriorityRow />
              <PriorityRow />
            </View>

            <View style={styles.notes}>
              <Notes />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
