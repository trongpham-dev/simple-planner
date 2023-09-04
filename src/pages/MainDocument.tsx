import { Document, PDFViewer, Page, View } from "@react-pdf/renderer";
import Weekly from "./weekly/Weekly";
import moment from "moment/moment";
import { Weekly4 } from "./weekly/Weekly4";

const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
const weeks = getWeekDates(2023, 7, 1);

const MainDocument = () => {
  // const elms = months.map((m) => (
  //   <Weekly id={m} year={2023} month={m} startDate={1} key={m} />
  // ));

  const elms = months.map((m) => (
    <Weekly4 id={m} year={2023} month={m} startDate={1} key={m} />
  ));

  return <Document>{elms}</Document>;
};

export default MainDocument;
