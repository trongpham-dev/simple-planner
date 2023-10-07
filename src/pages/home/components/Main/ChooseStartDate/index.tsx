import PortraitMonday from "assets/images/portrait-color-theme-be.png";
import PortraitSunday from "assets/images/portrait-start-sunday.png";
import PortraitMondayGreen from "assets/images/portrait-color-theme-green.png";
import PortraitSundayGreen from "assets/images/portrait-sunday-green.png";
import PortraitMondayPurple from "assets/images/portrait-color-theme-purple.png";
import PortraitSundayPurple from "assets/images/portrait-sunday-purple.png";

import LandscapeMonday from "assets/images/landscape-color-theme-be.png";
import LandscapeSunday from "assets/images/landscape-sunday.png";
import LandscapeMondayGreen from "assets/images/landscape-color-theme-green.png";
import LandscapeSundayGreen from "assets/images/landscape-sunday-green.png";
import LandscapeMondayPurple from "assets/images/landscape-color-theme-purple.png";
import LandscapeSundayPurple from "assets/images/landscape-sunday-purple.png";
import { ColorType, Orientation, WeeklyStartType } from "models/enum";
import { useDispatch, useSelector } from "react-redux";
import { changeWeeklyStart, selectWeeklyStart } from "stores/reducers/start";
import { selectTheme } from "stores/reducers/theme";
import { isLandscape, isStartDateMonday, isStartDateSunday, showBorderColor } from "utils/common";

export const ChooseStartDate = () => {
  const dispatch = useDispatch();
  const { startAt } = useSelector(selectWeeklyStart());
  const { orientation, color } = useSelector(selectTheme());

  const chooseMonday = () => {
    dispatch(changeWeeklyStart(WeeklyStartType.Monday));
  };

  const chooseSunday = () => {
    dispatch(changeWeeklyStart(WeeklyStartType.Sunday));
  };

  const generateLayoutKey = (orientation: Orientation, startDate: WeeklyStartType | undefined, color: ColorType) => {
    return `${orientation}-${startDate}-${color}`;
  };

  const getImgSrc = () => {
    const layouts = {
      [generateLayoutKey(Orientation.Portrait, undefined, ColorType.Primary)]: PortraitMonday,
      [generateLayoutKey(Orientation.Portrait, WeeklyStartType.Monday, ColorType.Primary)]: PortraitMonday,
      [generateLayoutKey(Orientation.Portrait, WeeklyStartType.Sunday, ColorType.Primary)]: PortraitSunday,

      [generateLayoutKey(Orientation.Portrait, undefined, ColorType.Secondary)]: PortraitMondayGreen,
      [generateLayoutKey(Orientation.Portrait, WeeklyStartType.Monday, ColorType.Secondary)]: PortraitMondayGreen,
      [generateLayoutKey(Orientation.Portrait, WeeklyStartType.Sunday, ColorType.Secondary)]: PortraitSundayGreen,

      [generateLayoutKey(Orientation.Portrait, undefined, ColorType.Tertiary)]: PortraitMondayPurple,
      [generateLayoutKey(Orientation.Portrait, WeeklyStartType.Monday, ColorType.Tertiary)]: PortraitMondayPurple,
      [generateLayoutKey(Orientation.Portrait, WeeklyStartType.Sunday, ColorType.Tertiary)]: PortraitSundayPurple,

      [generateLayoutKey(Orientation.Landscape, undefined, ColorType.Primary)]: LandscapeMonday,
      [generateLayoutKey(Orientation.Landscape, WeeklyStartType.Monday, ColorType.Primary)]: LandscapeMonday,
      [generateLayoutKey(Orientation.Landscape, WeeklyStartType.Sunday, ColorType.Primary)]: LandscapeSunday,

      [generateLayoutKey(Orientation.Landscape, undefined, ColorType.Secondary)]: LandscapeMondayGreen,
      [generateLayoutKey(Orientation.Landscape, WeeklyStartType.Monday, ColorType.Secondary)]: LandscapeMondayGreen,
      [generateLayoutKey(Orientation.Landscape, WeeklyStartType.Sunday, ColorType.Secondary)]: LandscapeSundayGreen,

      [generateLayoutKey(Orientation.Landscape, undefined, ColorType.Tertiary)]: LandscapeMondayPurple,
      [generateLayoutKey(Orientation.Landscape, WeeklyStartType.Monday, ColorType.Tertiary)]: LandscapeMondayPurple,
      [generateLayoutKey(Orientation.Landscape, WeeklyStartType.Sunday, ColorType.Tertiary)]: LandscapeSundayPurple,
    };

    const layoutKey = generateLayoutKey(orientation as Orientation, startAt as WeeklyStartType, color as ColorType);
    return layouts[layoutKey] || PortraitMonday;
  };

  return (
    <div className="flex flex-col items-start">
      <h1 className="font-medium text-4xl mb-10 text-center w-full uppercase">Choose your weekly start date</h1>
      <div className="flex justify-center items-center gap-[40px] self-stretch">
        <div className="w-[400px] flex flex-col items-start gap-[20px]"></div>

        <div className="flex justify-center items-center flex-grow">
          <img src={getImgSrc()} alt="landscape-weekly-boxed-primary" width={isLandscape(orientation) ? 620 : 360} />
        </div>

        <div className="w-[400px] flex flex-col items-start gap-[20px]">
          <div
            className={`flex w-full p-[12px] flex-col items-center self-stretch border border-solid cursor-pointer
          ${showBorderColor(isStartDateMonday(startAt!))}`}
            onClick={chooseMonday}
          >
            <button className="uppercase font-semibold text-xl">MONDAY</button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid cursor-pointer
            ${showBorderColor(isStartDateSunday(startAt!))}`}
            onClick={chooseSunday}
          >
            <button className="uppercase font-semibold text-xl">SUNDAY</button>
          </div>
        </div>
      </div>
    </div>
  );
};
