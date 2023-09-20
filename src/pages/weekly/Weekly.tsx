import { Link, Page, Text, View } from "@react-pdf/renderer";
import DayWeekly from "../../components/DayWeekly";
import DayWeeklyNotes from "../../components/DayWeeklyNotes";

import moment from "moment/moment";
import Daily from "pages/daily/Daily";

const getWeekDates = (year: number, month: number, dayOfWeek: number) => {
  let weeks = [];
  let firstDay = moment([year, month]).startOf("month");
  let lastDay = moment([year, month]).endOf("month");
  let week = firstDay.clone().day(dayOfWeek);
  while (week.isBefore(lastDay)) {
    let days = [];
    for (let i = 0; i < 7; i++) {
      days.push(week.clone().add(i, "d"));
    }
    weeks.push(days);
    week.add(7, "d");
  }
  return weeks;
};

interface Props {
  id: number;
  year: number;
  month: number;
  startDate: number;
}
const Weekly = ({ id, year, month, startDate }: Props) => {
  const weeks = getWeekDates(year, month, startDate);
  let firstWeek = 0;
  const elms = weeks.map((w) => (
    <>
      <Page>
        <View>
          <Text id={`${String(id)}-${String(firstWeek++)}`}>Weekly</Text>
          <div className="flex w-[842px] h-[595px] p-[12px] justify-center items-center p-[12px]">
            <div className="flex w-[818px] h-[571px] items-start shrink-0">
              <div className="flex flex-[1_0_0] flex-wrap p-[0px_12px] items-center justify-center content-center gap-[12px] self-stretch ">
                {w.map((d) => (
                  <DayWeekly day={d} />
                ))}

                <DayWeeklyNotes />
                <Link src="#0-0">thang 1</Link>
                <Link src="#1-0">thang 2</Link>
                <Link src="#2-0">thang 3</Link>
                <Link src="#3-0">thang 4</Link>
                <Link src="#4-0">thang 5</Link>
                <Link src="#5-0">thang 6</Link>
                <Link src="#6-0">thang 7</Link>
                <Link src="#7-0">thang 8</Link>
                <Link src="#8-0">thang 9</Link>
                <Link src="#9-0">thang 10</Link>
                <Link src="#10-0">thang 11</Link>
                <Link src="#11-0">thang 12</Link>
              </div>
            </div>
          </div>
        </View>
      </Page>
      {w.map((d) => (
        <Daily day={d} />
      ))}
    </>
  ));

  return elms;
};

export default Weekly;
