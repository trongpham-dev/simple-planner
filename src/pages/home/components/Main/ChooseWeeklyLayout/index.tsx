import { WeeklyType } from "models/enum";
import { useDispatch, useSelector } from "react-redux";
import { changeWeeklyLayout, selectWeekly } from "stores/reducers/weekly";
import LandscapeWeeklyBoxedPrimary from "assets/images/landscape-weekly-boxed-primary.png";

export const SelectWeeklyLayout = () => {
  const dispatch = useDispatch();
  const { weeklyLayout } = useSelector(selectWeekly());

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
      <h1 className="font-medium text-4xl mb-10 text-center">
        Choose your weekly layout
      </h1>
      <div className="flex justify-center items-center gap-[40px] self-stretch">
        <div className="flex flex-col items-start gap-[20px] flex-[1_1_0]"></div>
        <div className="flex justify-center items-center">
          <img
            src={LandscapeWeeklyBoxedPrimary}
            alt="landscape-weekly-boxed-primary"
            width={360}
          />
        </div>
        <div className="flex flex-col items-start gap-[20px] flex-[1_0_0]">
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid border-[${
              weeklyLayout === WeeklyType.Boxed ? "#0D0D0D" : "#E1E1E1"
            }]`}
          >
            <button
              onClick={chooseBoxed}
              className="uppercase font-semibold text-xl"
            >
              BOXED
            </button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid border-[${
              weeklyLayout === WeeklyType.Hourly ? "#0D0D0D" : "#E1E1E1"
            }]`}
          >
            <button
              onClick={chooseHourly}
              className="uppercase font-semibold text-xl"
            >
              HOURLY
            </button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid border-[${
              weeklyLayout === WeeklyType.Lined ? "#0D0D0D" : "#E1E1E1"
            }]`}
          >
            <button
              onClick={chooseLined}
              className="uppercase font-semibold text-xl"
            >
              LINED
            </button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid border-[${
              weeklyLayout === WeeklyType.Vertical ? "#0D0D0D" : "#E1E1E1"
            }]`}
          >
            <button
              onClick={chooseVertical}
              className="uppercase font-semibold text-xl"
            >
              VERTICAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
