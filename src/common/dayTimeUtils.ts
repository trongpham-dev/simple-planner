import moment from "moment";

export const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const getWeekDates = (
  year: number,
  month: number,
  dayOfWeek: number
) => {
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
