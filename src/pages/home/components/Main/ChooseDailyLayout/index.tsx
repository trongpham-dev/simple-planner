import { ColorType, DailyType, Orientation } from "models/enum";
import { useDispatch, useSelector } from "react-redux";
import { changeDailyLayout, selectDaily } from "stores/reducers/daily";
import LandscapeDailyMinimalPrimary from "assets/images/landscape-daily-minimal-primary.png";
import PortraitDailyMinimal from "assets/images/portrait-daily-minimal.png";
import PortraitDailyStructured from "assets/images/portrait-daily-structured.png";
import PortraitDailyMinimalGreen from "assets/images/portrait-daily-minimal-green.png";
import PortraitDailyStructuredGreen from "assets/images/portrait-daily-structured-green.png";
import PortraitDailyMinimalPurple from "assets/images/portrait-daily-minimal-purple.png";
import PortraitDailyStructuredPurple from "assets/images/portrait-daily-structured-purple.png";

import LandscapeDailyMinimal from "assets/images/landscape-daily-minimal.png";
import LandscapeDailyStructured from "assets/images/landscape-daily-structured.png";
import LandscapeDailyMinimalGreen from "assets/images/landscape-daily-minimal-green.png";
import LandscapeDailyStructuredGreen from "assets/images/landscape-daily-structured-green.png";
import LandscapeDailyMinimalPurple from "assets/images/landscape-daily-minimal-purple.png";
import LandscapeDailyStructuredPurple from "assets/images/landscape-daily-structured-purple.png.png";
import { isDailyMinimalLayout, isDailyStructuredLayout, isLandscape, showBorderColor } from "utils/common";
import { selectTheme } from "stores/reducers/theme";

export const SelectDailyLayout = () => {
  const dispatch = useDispatch();
  const { dailyLayout } = useSelector(selectDaily());
  const { orientation, color } = useSelector(selectTheme());

  const chooseMinimal = () => {
    dispatch(changeDailyLayout(DailyType.Minimal));
  };

  const chooseStructured = () => {
    dispatch(changeDailyLayout(DailyType.Structured));
  };

  const generateLayoutKey = (orientation: Orientation, dailyLayout: DailyType | undefined, color: ColorType) => {
    return `${orientation}-${dailyLayout}-${color}`;
  };

  const getImgSrc = () => {
    const layouts = {
      [generateLayoutKey(Orientation.Portrait, undefined, ColorType.Primary)]: PortraitDailyMinimal,
      [generateLayoutKey(Orientation.Portrait, DailyType.Minimal, ColorType.Primary)]: PortraitDailyMinimal,
      [generateLayoutKey(Orientation.Portrait, DailyType.Structured, ColorType.Primary)]: PortraitDailyStructured,

      [generateLayoutKey(Orientation.Portrait, undefined, ColorType.Secondary)]: PortraitDailyMinimalGreen,
      [generateLayoutKey(Orientation.Portrait, DailyType.Minimal, ColorType.Secondary)]: PortraitDailyMinimalGreen,
      [generateLayoutKey(Orientation.Portrait, DailyType.Structured, ColorType.Secondary)]:
        PortraitDailyStructuredGreen,

      [generateLayoutKey(Orientation.Portrait, undefined, ColorType.Tertiary)]: PortraitDailyMinimalPurple,
      [generateLayoutKey(Orientation.Portrait, DailyType.Minimal, ColorType.Tertiary)]: PortraitDailyMinimalPurple,
      [generateLayoutKey(Orientation.Portrait, DailyType.Structured, ColorType.Tertiary)]:
        PortraitDailyStructuredPurple,

      [generateLayoutKey(Orientation.Landscape, undefined, ColorType.Primary)]: LandscapeDailyMinimal,
      [generateLayoutKey(Orientation.Landscape, DailyType.Minimal, ColorType.Primary)]: LandscapeDailyMinimal,
      [generateLayoutKey(Orientation.Landscape, DailyType.Structured, ColorType.Primary)]: LandscapeDailyStructured,

      [generateLayoutKey(Orientation.Landscape, undefined, ColorType.Secondary)]: LandscapeDailyMinimalGreen,
      [generateLayoutKey(Orientation.Landscape, DailyType.Minimal, ColorType.Secondary)]: LandscapeDailyMinimalGreen,
      [generateLayoutKey(Orientation.Landscape, DailyType.Structured, ColorType.Secondary)]:
        LandscapeDailyStructuredGreen,

      [generateLayoutKey(Orientation.Landscape, undefined, ColorType.Tertiary)]: LandscapeDailyMinimalPurple,
      [generateLayoutKey(Orientation.Landscape, DailyType.Minimal, ColorType.Tertiary)]: LandscapeDailyMinimalPurple,
      [generateLayoutKey(Orientation.Landscape, DailyType.Structured, ColorType.Tertiary)]:
        LandscapeDailyStructuredPurple,
    };

    const layoutKey = generateLayoutKey(orientation as Orientation, dailyLayout as DailyType, color as ColorType);
    return layouts[layoutKey] || PortraitDailyMinimal;
  };

  return (
    <div className="flex flex-col items-start">
      <h1 className="font-medium text-4xl mb-10 text-center w-full uppercase">Choose your daily layout</h1>
      <div className="flex justify-center items-center gap-[40px] self-stretch">
        <div className="flex flex-col items-start gap-[20px] w-[400px]"></div>

        <div className="flex justify-center items-center flex-grow">
          <img src={getImgSrc()} alt="landscape-weekly-boxed-primary" width={isLandscape(orientation) ? 620 : 360} />
        </div>

        <div className="flex flex-col items-start gap-[20px] w-[400px]">
          <div
            className={`flex p-[12px] flex-col items-center self-stretch border border-solid cursor-pointer
            ${showBorderColor(isDailyMinimalLayout(dailyLayout!))}`}
            onClick={chooseMinimal}
          >
            <button className="uppercase font-semibold text-xl">MINIMAL</button>
          </div>
          <div
            className={`flex p-[12px] flex-col items-center self-stretch border border-solid cursor-pointer
            ${showBorderColor(isDailyStructuredLayout(dailyLayout!))}`}
            onClick={chooseStructured}
          >
            <button className="uppercase font-semibold text-xl">STRUCTURED</button>
          </div>
        </div>
      </div>
    </div>
  );
};
