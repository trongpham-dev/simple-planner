import { Page, StyleSheet, View } from "@react-pdf/renderer";
import Calendar from "components/Calendar";
import PageDateTitle from "components/PageDateTitle";
import Sidebar from "components/Sidebar";
import { Moment } from "moment";
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
    paddingBottom: 20,
    paddingRight: 8,
    flexGrow: 1,
  },
  heading: {
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
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
  sidebar: {
    width: "5%",
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

export const Weekly1 = ({ id, heading, description, days }: Props) => {
  return (
    <>
      <Page size="A4" style={styles.page} orientation="landscape" id={id} wrap={false}>
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
              <View style={styles.top}>{renderDayCard(0, 3, days)}</View>
              <View style={styles.bottom}>
                {renderDayCard(4, 6, days)}
                <View style={[styles.card, styles.withoutMargin]}>
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

const renderDayCard = (from: number, to: number, days: Moment[]) => {
  let elms: ReactElement[] = [];
  for (let i = from; i <= to; i++) {
    if (i === 3) {
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
