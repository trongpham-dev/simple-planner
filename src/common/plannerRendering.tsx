import { Moment } from "moment";
import { ColorType, DailyType } from "models/enum";
import { Daily1 } from "pages/daily/Daily1";
import { Daily2 } from "pages/daily/Daily2";
import { COLOR } from "constants/color";

export const DailyRendering = (layout: string, day: Moment, id: number) => {
  if (layout === DailyType.Minimal) return <Daily1 key={id} day={day} />;
  return <Daily2 key={id} day={day} />;
};

export const handleBorderBottomColor = (color: string) => {
  if (color === ColorType.Primary) return COLOR.EXTRA_LIGHT_BROWN_2;
  if (color === ColorType.Secondary) return "#e7eadb";
  return "#f1e5f7";
};

export const handleBgColor = (color: string) => {
  if (color === ColorType.Primary) {
    return COLOR.LIGHT_BROWN;
  }
  if (color === ColorType.Secondary) {
    return "#e4e8d8";
  }
  return "#f4e8fA";
};
