import { DailyType } from "models/enum";
import { useDispatch, useSelector } from "react-redux";
import { changeDailyLayout, selectDaily } from "stores/reducers/daily";
import LandscapeDailyMinimalPrimary from "assets/images/landscape-daily-minimal-primary.png";

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
      <h1 className="font-medium text-4xl mb-10 text-center">
        Choose your weekly layout
      </h1>
      <div className="flex justify-center items-center gap-[40px] self-stretch">
        <div className="flex flex-col items-start gap-[20px] flex-[1_1_0]"></div>
        <div className="flex justify-center items-center">
          <img
            src={LandscapeDailyMinimalPrimary}
            alt="landscape-weekly-boxed-primary"
            width={360}
          />
        </div>
        <div className="flex flex-col items-start gap-[20px] flex-[1_0_0]">
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid border-[${
              dailyLayout === DailyType.Minimal ? "#0D0D0D" : "#E1E1E1"
            }]`}
          >
            <button
              onClick={chooseMinimal}
              className="uppercase font-semibold text-xl"
            >
              MINIMAL
            </button>
          </div>
          <div
            className={`flex p-[16px] flex-col items-center gap-[14px] self-stretch bg-[#FFF] border border-solid border-[${
              dailyLayout === DailyType.Structured ? "#0D0D0D" : "#E1E1E1"
            }]`}
          >
            <button
              onClick={chooseStructured}
              className="uppercase font-semibold text-xl"
            >
              STRUCTURED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
