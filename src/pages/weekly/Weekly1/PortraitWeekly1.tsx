import { Page, StyleSheet, View } from "@react-pdf/renderer";
import Calendar from "components/Calendar";
import PageDateTitle from "components/PageDateTitle";
import Sidebar from "components/Sidebar";
import moment, { Moment } from "moment";
import DayCard from "pages/weekly/Weekly1/DayCard";
import Notes from "pages/weekly/Weekly3/Notes";
import { ReactElement } from "react";

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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    width: "6%",
    height: "100%",
    marginLeft: 4,
  },
});

interface Props {
  id: string;
  heading: string;
  description: string;
  days: Moment[];
}

export const PortraitWeekly1 = ({ id, heading, description, days }: Props) => {
  return (
    <>
      <Page size="A4" style={styles.page} orientation="portrait" wrap={false} id={id}>
        <View style={styles.wrapper}>
          <View style={styles.main}>
            <View style={styles.heading}>
              <PageDateTitle heading={heading} description={description} />
              <Calendar
                context={{
                  date: new Date("2023-04-1"),
                  activeRangeDates: [new Date("2023-03-27"), new Date("2023-04-02")],
                }}
              />
            </View>
            <View style={styles.container}>
              <View style={styles.top}>{renderDayCard(0, 2, days)}</View>
              <View style={styles.middle}>{renderDayCard(3, 5, days)}</View>
              <View style={styles.bottom}>
                {renderDayCard(6, 6, days)}

                <View style={[styles.note, styles.withoutMargin]}>
                  <Notes />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.sidebar}>
            <Sidebar portraitPaddingVertical={29} />
          </View>
        </View>
      </Page>
    </>
  );
};

const renderDayCard = (from: number, to: number, days: Moment[]) => {
  let elms: ReactElement[] = [];
  for (let i = from; i <= to; i++) {
    if (i === 2 || i === 5) {
      elms.push(
        <View key={i} style={[styles.card, styles.withoutMargin]}>
          <DayCard key={i} day={days[i]} />
        </View>
      );
    } else {
      elms.push(
        <View key={i} style={styles.card}>
          <DayCard key={i} day={days[i]} />
        </View>
      );
    }
  }
  return elms;
};
