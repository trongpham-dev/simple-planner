import { DailyType } from "models/enum";
import { useDispatch, useSelector } from "react-redux";
import { changeDailyLayout, selectDaily } from "stores/reducers/daily";
import LandscapeDailyMinimalPrimary from "assets/images/landscape-daily-minimal-primary.png";
import {
  isDailyMinimalLayout,
  isDailyStructuredLayout,
  showBorderColor,
} from "utils/common";

export const SelectDailyLayout = () => {
  const dispatch = useDispatch();
  const { dailyLayout } = useSelector(selectDaily());

  const chooseMinimal = () => {
    dispatch(changeDailyLayout(DailyType.Minimal));
  };

  const chooseStructured = () => {
    dispatch(changeDailyLayout(DailyType.Structured));
  };

  return (
    <div className="flex flex-col items-start">
      <h1 className="font-medium text-4xl mb-10 text-center w-full">
        Choose your daily layout
      </h1>
      <div className="flex justify-center items-center gap-[40px] self-stretch">
        <div className="flex flex-col items-start gap-[20px] w-[400px]"></div>

        <div className="flex justify-center items-center flex-grow">
          <img
            src={LandscapeDailyMinimalPrimary}
            alt="landscape-weekly-boxed-primary"
            width={360}
          />
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
            <button className="uppercase font-semibold text-xl">
              STRUCTURED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
