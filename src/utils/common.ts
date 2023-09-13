import { DailyType, Orientation, WeeklyType } from "models/enum";

export const isLandscape = (orientation: Orientation | undefined) => orientation === Orientation.Landscape;
export const isPortrait = (orientation: Orientation | undefined) => orientation === Orientation.Portrait;

export const showBorderColor = (isActive: boolean) => {
  return isActive ? "border-[#0D0D0D]" : "border-[#E1E1E1]";
};

export const isWeeklyBoxedLayout = (weeklyLayout: WeeklyType) => weeklyLayout === WeeklyType.Boxed;
export const isWeeklyHourlyLayout = (weeklyLayout: WeeklyType) => weeklyLayout === WeeklyType.Hourly;
export const isWeeklyLinedLayout = (weeklyLayout: WeeklyType) => weeklyLayout === WeeklyType.Lined;
export const isWeeklyVerticalLayout = (weeklyLayout: WeeklyType) => weeklyLayout === WeeklyType.Vertical;

export const isDailyMinimalLayout = (dailyLayout: DailyType) => dailyLayout === DailyType.Minimal;
export const isDailyStructuredLayout = (dailyLayout: DailyType) => dailyLayout === DailyType.Structured;
