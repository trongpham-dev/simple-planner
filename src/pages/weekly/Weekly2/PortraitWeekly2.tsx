import { Page, StyleSheet, View } from "@react-pdf/renderer";
import Calendar from "components/Calendar";
import PageDateTitle from "components/PageDateTitle";
import Sidebar from "components/Sidebar";
import TimeTable from "components/TimeTable";
import { Moment } from "moment";

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

export const PortraitWeekly2 = ({ id, heading, description, days }: Props) => {
  return (
    <Page size="A4" style={styles.page} orientation="portrait" id={id} wrap={false}>
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <View style={styles.heading}>
            <PageDateTitle heading={heading} description={description} />
            <Calendar
              context={{
                date: days[0].toDate(),
                activeRangeDates: [days[0].toDate(), days[6].toDate()],
              }}
            />
          </View>
          <View style={styles.container}>
            <TimeTable days={days} />
          </View>
        </View>

        <View style={styles.sidebar}>
          <Sidebar portraitPaddingVertical={28} />
        </View>
      </View>
    </Page>
  );
};
