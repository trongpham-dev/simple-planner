import { Page, StyleSheet, View } from "@react-pdf/renderer";
import { getWeekDates } from "common/dayTimeUtils";
import { DailyRendering } from "common/plannerRendering";
import PageDateTitle from "components/PageDateTitle";
import Sidebar from "components/Sidebar";
import moment, { Moment } from "moment";
import DayCard from "pages/weekly/Weekly1/DayCard";
import Notes from "pages/weekly/Weekly3/Notes";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectDaily } from "stores/reducers/daily";

const styles = StyleSheet.create({
  page: {
    paddingLeft: 15,
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

export const PortraitWeekly1 = () => {
  return (
    <>
      <Page size="A4" style={styles.page} orientation="portrait" wrap={false}>
        <View style={styles.wrapper}>
          <View style={styles.main}>
            <View style={styles.heading}>
              <PageDateTitle heading={"heading"} description={"description"} />
            </View>
            <View style={styles.container}>
              <View style={styles.top}>
                <View style={styles.card}>
                  <DayCard day={moment()} />
                </View>
                <View style={styles.card}>
                  <DayCard day={moment()} />
                </View>
                <View style={[styles.card, styles.withoutMargin]}>
                  <DayCard day={moment()} />
                </View>
              </View>
              <View style={styles.middle}>
                <View style={styles.card}>
                  <DayCard day={moment()} />
                </View>
                <View style={styles.card}>
                  <DayCard day={moment()} />
                </View>
                <View style={[styles.card, styles.withoutMargin]}>
                  <DayCard day={moment()} />
                </View>
              </View>
              <View style={styles.bottom}>
                <View style={styles.card}>
                  <DayCard day={moment()} />
                </View>

                <View style={[styles.note, styles.withoutMargin]}>
                  <Notes />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.sidebar}>
            <Sidebar />
          </View>
        </View>
      </Page>
    </>
  );
};
