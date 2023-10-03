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
    paddingBottom: 20,
    paddingRight: 8,
    flexGrow: 1,
  },
  heading: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginTop: 4,
    width: "100%",
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

export const Weekly2 = ({ id, heading, description, days }: Props) => {
  return (
    <>
      <Page size="A4" style={styles.page} orientation="landscape" id={id}>
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
            <View>
              <TimeTable days={days} />
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
