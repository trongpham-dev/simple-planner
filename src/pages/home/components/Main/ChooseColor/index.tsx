import PortraitColorBe from "assets/images/portrait-color-theme-be.png";
import PortraitColorGreen from "assets/images/portrait-color-theme-green.png";
import PortraitColorPurple from "assets/images/portrait-color-theme-purple.png";
import LandscapeColorBe from "assets/images/landscape-color-theme-be.png";
import LandscapeColorGreen from "assets/images/landscape-color-theme-green.png";
import LandscapeColorPurple from "assets/images/landscape-color-theme-purple.png";
import { ColorType } from "models/enum";
import ColorSwitchItem from "pages/home/components/Header/ColorSwitchItem";
import { useDispatch, useSelector } from "react-redux";
import { changeColor, selectTheme } from "stores/reducers/theme";
import { isLandscape, isPrimaryColor, isSecondaryColor, isTertiaryColor, showBorderColor } from "utils/common";

export default function ChooseColor() {
  const dispatch = useDispatch();
  const { orientation, color } = useSelector(selectTheme());

  const chooseColor = (color: ColorType) => {
    dispatch(changeColor(color));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-4xl mb-10">Choose your planner orientation</h1>

      <div className="flex gap-10">
        <div
          className={`border ${showBorderColor(isPrimaryColor(color))} ${STYLE}`}
          onClick={() => chooseColor(ColorType.Primary)}
        >
          <img
            src={isLandscape(orientation) ? LandscapeColorBe : PortraitColorBe}
            alt="start-landscape"
            width={isLandscape(orientation) ? 360 : 264}
            className={`${isLandscape(orientation) ? "mt-12" : ""}`}
          />
          <ColorSwitchItem colorType={ColorType.Primary} shadowColor="#EEE7DF" />
        </div>

        <div
          className={`border ${showBorderColor(isSecondaryColor(color))} ${STYLE}`}
          onClick={() => chooseColor(ColorType.Secondary)}
        >
          <img
            src={isLandscape(orientation) ? LandscapeColorGreen : PortraitColorGreen}
            alt="start-landscape"
            width={isLandscape(orientation) ? 360 : 264}
            className={`${isLandscape(orientation) ? "mt-12" : ""}`}
          />
          <ColorSwitchItem colorType={ColorType.Secondary} shadowColor="#E7EBDB" />
        </div>

        <div
          className={`border ${showBorderColor(isTertiaryColor(color))} ${STYLE}`}
          onClick={() => chooseColor(ColorType.Tertiary)}
        >
          <img
            src={isLandscape(orientation) ? LandscapeColorPurple : PortraitColorPurple}
            alt="start-landscape"
            width={isLandscape(orientation) ? 360 : 264}
            className={`${isLandscape(orientation) ? "mt-12" : ""}`}
          />
          <ColorSwitchItem colorType={ColorType.Tertiary} shadowColor="#F4E8FA" />
        </div>
      </div>
    </div>
  );
}

const STYLE = "w-[450px] h-[450px] py-4 flex flex-col items-center justify-between cursor-pointer";
