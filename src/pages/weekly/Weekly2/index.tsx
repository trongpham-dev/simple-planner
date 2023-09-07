import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import PageDateTitle from "components/PageDateTitle";
import TimeTable from "components/TimeTable";

const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 20,
  },
  heading: {
    marginBottom: 6,
  },
});

export const Weekly2 = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View style={styles.heading}>
          <PageDateTitle heading="August 2023" description="07 august - 13 August" />
        </View>
        <TimeTable />
      </Page>
    </Document>
  );
};
