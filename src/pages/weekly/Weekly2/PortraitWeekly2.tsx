import { Page, StyleSheet, View } from "@react-pdf/renderer";
import PageDateTitle from "components/PageDateTitle";
import Sidebar from "components/Sidebar";
import TimeTable from "components/TimeTable";

const styles = StyleSheet.create({
  page: {
    paddingLeft: 15,
    fontFamily: "Clash Display",
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
  },
  main: {
    width: "95%",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 8,
    flexGrow: 1,
  },
  heading: {
    marginBottom: 6,
  },
  container: {
    marginTop: 4,
    width: "100%",
  },
  top: {
    height: "32%",
    marginBottom: 12,
    flexDirection: "row",
  },
  middle: {
    height: "32%",
    marginBottom: 12,
    flexDirection: "row",
  },
  bottom: {
    height: "32%",
    flexDirection: "row",
  },
  card: {
    width: "33%",
    height: "100%",
    marginRight: "8",
  },
  note: {
    flexGrow: 1,
    height: "100%",
  },
  withoutMargin: {
    marginRight: 0,
  },
  sidebar: {
    width: "5%",
    height: "100%",
    marginLeft: 4,
  },
});

export const PortraitWeekly2 = () => {
  return (
    <Page size="A4" style={styles.page} orientation="portrait">
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <View style={styles.heading}>
            <PageDateTitle heading={"heading"} description={"description"} />
          </View>
          <View style={styles.container}>
            <TimeTable />
          </View>
        </View>

        <View style={styles.sidebar}>
          <Sidebar />
        </View>
      </View>
    </Page>
  );
};
