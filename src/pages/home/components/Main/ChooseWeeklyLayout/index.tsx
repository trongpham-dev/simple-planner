import { WeeklyType } from "models/enum";
import { useDispatch, useSelector } from "react-redux";
import { changeWeeklyLayout, selectWeekly } from "stores/reducers/weekly";
import LandscapeWeeklyBoxedPrimary from "assets/images/landscape-weekly-boxed-primary.png";
import { isWeeklyBoxedLayout, isWeeklyHourlyLayout, isWeeklyLinedLayout, isWeeklyVerticalLayout, showBorderColor } from "utils/common";

export const SelectWeeklyLayout = () => {
  const dispatch = useDispatch();
  const { weeklyLayout } = useSelector(selectWeekly());
  console.log("🚀 ~ file: index.tsx:10 ~ SelectWeeklyLayout ~ weeklyLayout:", weeklyLayout);

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

  return (
    <div className="flex flex-col items-start">
      <h1 className="font-medium text-4xl mb-10 text-center w-full">Choose your weekly layout</h1>
      <div className="flex justify-center items-center gap-[40px] self-stretch">
        <div className="w-[400px] flex flex-col items-start gap-[20px]"></div>

        <div className="flex justify-center items-center flex-grow">
          <img src={LandscapeWeeklyBoxedPrimary} alt="landscape-weekly-boxed-primary" width={360} />
        </div>

        <div className="w-[400px] flex flex-col items-start gap-[20px]">
          <div
            className={`flex w-full p-[12px] flex-col items-center self-stretch border border-solid cursor-pointer
          ${showBorderColor(isWeeklyBoxedLayout(weeklyLayout))}`}
            onClick={chooseBoxed}
          >
            <button className="uppercase font-semibold text-xl">BOXED</button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid cursor-pointer
            ${showBorderColor(isWeeklyHourlyLayout(weeklyLayout))}`}
            onClick={chooseHourly}
          >
            <button className="uppercase font-semibold text-xl">HOURLY</button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid cursor-pointer
            ${showBorderColor(isWeeklyLinedLayout(weeklyLayout))}`}
            onClick={chooseLined}
          >
            <button className="uppercase font-semibold text-xl">LINED</button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid cursor-pointer
            ${showBorderColor(isWeeklyVerticalLayout(weeklyLayout))}`}
            onClick={chooseVertical}
          >
            <button className="uppercase font-semibold text-xl">VERTICAL</button>
          </div>
        </div>
      </div>
    </div>
  );
};
