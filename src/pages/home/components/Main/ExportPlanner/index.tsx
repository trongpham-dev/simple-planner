import { ColorType, Orientation } from "models/enum";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

import PortraitBe from "assets/images/portrait-color-theme-be.png";
import PortraitGreen from "assets/images/portrait-color-theme-green.png";
import PortraitPurple from "assets/images/portrait-color-theme-purple.png";

import LandscapeBe from "assets/images/landscape-box.png";
import LandscapeGreen from "assets/images/landscape-box-green.png";
import LandscapePurple from "assets/images/landscape-box-purple.png";

import { isLandscape } from "utils/common";

export const ExportPlanner = () => {
  const { orientation, color } = useSelector(selectTheme());

  const generateLayoutKey = (orientation: Orientation, color: ColorType) => {
    return `${orientation}-${color}`;
  };

  const getImgSrc = () => {
    const layouts = {
      [generateLayoutKey(Orientation.Portrait, ColorType.Primary)]: PortraitBe,
      [generateLayoutKey(Orientation.Portrait, ColorType.Secondary)]: PortraitGreen,
      [generateLayoutKey(Orientation.Portrait, ColorType.Tertiary)]: PortraitPurple,

      [generateLayoutKey(Orientation.Landscape, ColorType.Primary)]: LandscapeBe,
      [generateLayoutKey(Orientation.Landscape, ColorType.Secondary)]: LandscapeGreen,
      [generateLayoutKey(Orientation.Landscape, ColorType.Tertiary)]: LandscapePurple,
    };

    const layoutKey = generateLayoutKey(orientation as Orientation, color as ColorType);
    return layouts[layoutKey] || PortraitBe;
  };
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <h1 className="font-medium text-4xl mb-10 text-center uppercase">
        Your customized planner is now ready. <br /> Download to use
      </h1>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={getImgSrc()} alt="landscape-weekly-boxed-primary" width={isLandscape(orientation) ? 620 : 360} />
        </div>
      </div>
    </div>
  );
};
