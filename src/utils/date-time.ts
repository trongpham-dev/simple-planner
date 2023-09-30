import { SHORT_DATE } from "constants/common";
import moment from "moment";

export const formatShortDate = (date: string | Date) => {
  return moment(date).format(SHORT_DATE);
};

export const getMonthRange = (month: number, year: number) => {
  let startDate;

  // Specific case: 01/2023 -> start of calendar is 02/01/2023
  if (month === 1 && year === 2023) {
    startDate = new Date("2023-01-02");
  } else {
    startDate = new Date(year, month - 1, 1);

    var startDay = startDate.getDay();
    var daysToMonday = startDay === 0 ? 6 : startDay - 1;
    startDate.setDate(startDate.getDate() - daysToMonday);
  }

  let endDate = new Date(year, month, 0);
  endDate.setDate(endDate.getDate() + ((7 - endDate.getDay()) % 7));

  return {
    startDate,
    endDate,
  };
};

export const getDatesFromRange = (startDate: string | Date, endDate: string | Date) => {
  let start = new Date(startDate);
  let end = new Date(endDate);

  let days = [];

  while (start < end) {
    days.push(new Date(start));

    start.setDate(start.getDate() + 1);
  }

  days.push(endDate);

  return days;
};

export const getDatesOfMonth = (month: number, year: number) => {
  const { startDate, endDate } = getMonthRange(month, year);

  return getDatesFromRange(startDate, endDate);
};

export const isSameDay = (date: string | Date, value: string | Date): boolean => {
  return moment(date).isSame(moment(value), "day");
};

export const isSameMonth = (date1: string | Date, date2: string | Date) => {
  return moment(date1).isSame(moment(date2), "month");
};
