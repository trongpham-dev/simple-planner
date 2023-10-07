import { ColorType, Orientation, WeeklyType } from "models/enum";
import { useDispatch, useSelector } from "react-redux";
import { changeWeeklyLayout, selectWeekly } from "stores/reducers/weekly";
import LandscapeWeeklyBoxedPrimary from "assets/images/landscape-weekly-boxed-primary.png";
import {
  isLandscape,
  isWeeklyBoxedLayout,
  isWeeklyHourlyLayout,
  isWeeklyLinedLayout,
  isWeeklyVerticalLayout,
  showBorderColor,
} from "utils/common";

import PortraitBoxedBe from "assets/images/portrait-color-theme-be.png";
import PortraitHourlyBe from "assets/images/portrait-hourly.png";
import PortraitLinedBe from "assets/images/portrait-lined.png";
import PortraitVerticalBe from "assets/images/portrait-vertical.png";

import PortraitBoxedGreen from "assets/images/portrait-color-theme-green.png";
import PortraitHourlyGreen from "assets/images/portrait-hourly-green.png";
import PortraitLinedGreen from "assets/images/portrait-lined-green.png";
import PortraitVerticalGreen from "assets/images/portrait-vertical-green.png";

import PortraitBoxedPurple from "assets/images/portrait-color-theme-purple.png";
import PortraitHourlyPurple from "assets/images/portrait-hourly-purple.png";
import PortraitLinedPurple from "assets/images/portrait-lined-purple.png";
import PortraitVerticalPurple from "assets/images/portrait-vertical-purple.png";

import LandscapeBoxedBe from "assets/images/landscape-box.png";
import LandscapeHourlyBe from "assets/images/landscape-hourly.png";
import LandscapeLinedBe from "assets/images/landscape-lined.png";
import LandscapeVerticalBe from "assets/images/landscape-vertical.png";

import LandscapeBoxedGreen from "assets/images/landscape-box-green.png";
import LandscapeHourlyGreen from "assets/images/landscape-hourly-green.png";
import LandscapeLinedGreen from "assets/images/landscape-lined-green.png";
import LandscapeVerticalGreen from "assets/images/landscape-vertical-green.png";

import LandscapeBoxedPurple from "assets/images/landscape-box-purple.png";
import LandscapeHourlyPurple from "assets/images/landscape-hourly-purple.png";
import LandscapeLinedPurple from "assets/images/landscape-lined-purple.png";
import LandscapeVerticalPurple from "assets/images/landscape-vertical-purple.png";

import { selectTheme } from "stores/reducers/theme";

export const SelectWeeklyLayout = () => {
  const dispatch = useDispatch();
  const { weeklyLayout } = useSelector(selectWeekly());
  const { orientation, color } = useSelector(selectTheme());

  const chooseBoxed = () => {
    dispatch(changeWeeklyLayout(WeeklyType.Boxed));
  };

  const chooseHourly = () => {
    dispatch(changeWeeklyLayout(WeeklyType.Hourly));
  };

  const chooseLined = () => {
    dispatch(changeWeeklyLayout(WeeklyType.Lined));
  };

  const chooseVertical = () => {
    dispatch(changeWeeklyLayout(WeeklyType.Vertical));
  };

  const generateLayoutKey = (orientation: Orientation, weeklyLayout: WeeklyType | undefined, color: ColorType) => {
    return `${orientation}-${weeklyLayout}-${color}`;
  };

  const getImgSrc = () => {
    const layouts = {
      [generateLayoutKey(Orientation.Portrait, undefined, ColorType.Primary)]: PortraitBoxedBe,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Boxed, ColorType.Primary)]: PortraitBoxedBe,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Hourly, ColorType.Primary)]: PortraitHourlyBe,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Lined, ColorType.Primary)]: PortraitLinedBe,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Vertical, ColorType.Primary)]: PortraitVerticalBe,

      [generateLayoutKey(Orientation.Portrait, undefined, ColorType.Secondary)]: PortraitBoxedGreen,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Boxed, ColorType.Secondary)]: PortraitBoxedGreen,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Hourly, ColorType.Secondary)]: PortraitHourlyGreen,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Lined, ColorType.Secondary)]: PortraitLinedGreen,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Vertical, ColorType.Secondary)]: PortraitVerticalGreen,

      [generateLayoutKey(Orientation.Portrait, undefined, ColorType.Tertiary)]: PortraitBoxedPurple,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Boxed, ColorType.Tertiary)]: PortraitBoxedPurple,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Hourly, ColorType.Tertiary)]: PortraitHourlyPurple,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Lined, ColorType.Tertiary)]: PortraitLinedPurple,
      [generateLayoutKey(Orientation.Portrait, WeeklyType.Vertical, ColorType.Tertiary)]: PortraitVerticalPurple,

      [generateLayoutKey(Orientation.Landscape, undefined, ColorType.Primary)]: LandscapeBoxedBe,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Boxed, ColorType.Primary)]: LandscapeBoxedBe,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Hourly, ColorType.Primary)]: LandscapeHourlyBe,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Lined, ColorType.Primary)]: LandscapeLinedBe,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Vertical, ColorType.Primary)]: LandscapeVerticalBe,

      [generateLayoutKey(Orientation.Landscape, undefined, ColorType.Secondary)]: LandscapeBoxedGreen,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Boxed, ColorType.Secondary)]: LandscapeBoxedGreen,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Hourly, ColorType.Secondary)]: LandscapeHourlyGreen,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Lined, ColorType.Secondary)]: LandscapeLinedGreen,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Vertical, ColorType.Secondary)]: LandscapeVerticalGreen,

      [generateLayoutKey(Orientation.Landscape, undefined, ColorType.Tertiary)]: LandscapeBoxedPurple,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Boxed, ColorType.Tertiary)]: LandscapeBoxedPurple,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Hourly, ColorType.Tertiary)]: LandscapeHourlyPurple,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Lined, ColorType.Tertiary)]: LandscapeLinedPurple,
      [generateLayoutKey(Orientation.Landscape, WeeklyType.Vertical, ColorType.Tertiary)]: LandscapeVerticalPurple,
    };

    const layoutKey = generateLayoutKey(orientation as Orientation, weeklyLayout as WeeklyType, color as ColorType);

    return layouts[layoutKey] || PortraitBoxedBe;
  };

  console.log("PortraitBoxed", getImgSrc());

  return (
    <div className="flex flex-col items-start">
      <h1 className="font-medium text-4xl mb-10 text-center w-full">Choose your weekly layout</h1>
      <div className="flex justify-center items-center gap-[40px] self-stretch">
        <div className="w-[400px] flex flex-col items-start gap-[20px]"></div>

        <div className="flex justify-center items-center flex-grow">
          <img src={getImgSrc()} alt="landscape-weekly-boxed-primary" width={isLandscape(orientation) ? 620 : 360} />
        </div>

        <div className="w-[400px] flex flex-col items-start gap-[20px]">
          <div
            className={`flex w-full p-[12px] flex-col items-center self-stretch border border-solid cursor-pointer
          ${showBorderColor(isWeeklyBoxedLayout(weeklyLayout!))}`}
            onClick={chooseBoxed}
          >
            <button className="uppercase font-semibold text-xl">BOXED</button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid cursor-pointer
            ${showBorderColor(isWeeklyHourlyLayout(weeklyLayout!))}`}
            onClick={chooseHourly}
          >
            <button className="uppercase font-semibold text-xl">HOURLY</button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid cursor-pointer
            ${showBorderColor(isWeeklyLinedLayout(weeklyLayout!))}`}
            onClick={chooseLined}
          >
            <button className="uppercase font-semibold text-xl">LINED</button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid cursor-pointer
            ${showBorderColor(isWeeklyVerticalLayout(weeklyLayout!))}`}
            onClick={chooseVertical}
          >
            <button className="uppercase font-semibold text-xl">VERTICAL</button>
          </div>
        </div>
      </div>
    </div>
  );
};
