import StartLandscape from "assets/images/start-landscape.png";
import StartPortrait from "assets/images/start-portrait.png";
import { Orientation } from "models/enum";
import { useDispatch, useSelector } from "react-redux";
import { changeOrientation, selectTheme } from "stores/reducers/theme";
import { isLandscape, isPortrait, showBorderColor } from "utils/common";

export default function StartingLayout() {
  const dispatch = useDispatch();
  const { orientation } = useSelector(selectTheme());
  console.log("🚀 ~ file: index.tsx:11 ~ StartingLayout ~ orientation:", orientation);

  const chooseLandscape = () => {
    dispatch(changeOrientation(Orientation.Landscape));
  };

  const choosePortrait = () => {
    dispatch(changeOrientation(Orientation.Portrait));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-4xl mb-10">Choose your planner orientation</h1>

      <div className="flex gap-10">
        <div className={`border ${showBorderColor(isPortrait(orientation))} ${STYLE}`} onClick={choosePortrait}>
          <img src={StartPortrait} alt="start-landscape" width={260} className="" />
          <p className="uppercase font-semibold text-xl">portrait</p>
        </div>

        <div className={`border ${showBorderColor(isLandscape(orientation))} ${STYLE}`} onClick={chooseLandscape}>
          <img src={StartLandscape} alt="start-landscape" width={360} className="mt-12" />
          <p className="uppercase font-semibold text-xl">landscape</p>
        </div>
      </div>
    </div>
  );
}

const STYLE = "w-[450px] h-[450px] py-4 flex flex-col items-center justify-between cursor-pointer";
