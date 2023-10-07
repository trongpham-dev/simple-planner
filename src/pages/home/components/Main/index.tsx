import { Button } from "antd";
import ChooseOrientationLayout from "pages/home/components/Main/ChooseOrientationLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";
import { SelectWeeklyLayout } from "./ChooseWeeklyLayout";
import { nextStep, prevStep, selectStep } from "stores/reducers/step";
import { SelectDailyLayout } from "./ChooseDailyLayout";
import { ExportPlanner } from "./ExportPlanner";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import MainDocument from "pages/MainDocument";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";
import { selectWeekly } from "stores/reducers/weekly";
import { selectDaily } from "stores/reducers/daily";
import { useState } from "react";
import { PlaningStep } from "models/enum";
import StartingLayout from "pages/home/components/Main/StartingLayout";
import ChooseColor from "pages/home/components/Main/ChooseColor";
import { ChooseStartDate } from "pages/home/components/Main/ChooseStartDate";
import { DownloadingPage } from "pages/home/components/Main/DownloadingPage";
import { ThankYouPage } from "pages/home/components/Main/ThankYouPage";
import { selectWeeklyStart } from "stores/reducers/start";
import { store } from "stores";
import { PDF_FILE_NAME } from "constants/common";
import { saveAs } from "file-saver";

type Props = {
  className?: string;
};

export default function Main({ className }: Props) {
  const { orientation, color } = useSelector(selectTheme());
  const { step } = useSelector(selectStep());
  const { startAt } = useSelector(selectWeeklyStart());
  const { weeklyLayout } = useSelector(selectWeekly());
  const { dailyLayout } = useSelector(selectDaily());
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoading = () => {
    setLoading(!loading);
  };

  const dispatch = useDispatch();

  const handleNextStep = () => {
    dispatch(nextStep());
  };

  const handlePrevStep = () => {
    dispatch(prevStep());
  };

  const isDisableNextStep = () => {
    if (step === PlaningStep.S1_Orientation && orientation) return false;
    if (step === PlaningStep.S2_Color && color) return false;
    if (step === PlaningStep.S3_WeeklyLayout && weeklyLayout) return false;
    if (step === PlaningStep.S4_WeeklyStartDate && startAt) return false;
    if (step === PlaningStep.S5_DailyLayout && dailyLayout) return false;
    return true;
  };

  const renderCurrStepComponent = () => {
    const steps: Record<number, JSX.Element> = {
      [PlaningStep.S0_Start]: <StartingLayout />,
      [PlaningStep.S1_Orientation]: <ChooseOrientationLayout />,
      [PlaningStep.S2_Color]: <ChooseColor />,
      [PlaningStep.S3_WeeklyLayout]: <SelectWeeklyLayout />,
      [PlaningStep.S4_WeeklyStartDate]: <ChooseStartDate />,
      [PlaningStep.S5_DailyLayout]: <SelectDailyLayout />,
      [PlaningStep.S6_Finish]: <ExportPlanner />,
      [PlaningStep.S7_Downloading]: <DownloadingPage />,
      [PlaningStep.S8_ThankYou]: <ThankYouPage />,
    };

    return steps[step as keyof Record<number, JSX.Element>];
    // if (step === 1) return <ChooseOrientationLayout />;
    // if (stsep === 2) {
    //   return <SelectWeeklyLayout />;
    // }
    // if (step === 3) return <SelectDailyLayout />;
    // if (step === 4) return <ExportPlanner />;
    // return <ChooseOrientationLayout />;
  };

  const generatePdfDocument = async () => {
    try {
      setLoading(true);
      const blob = await pdf(
        <Provider store={store}>
          <MainDocument />
        </Provider>
      ).toBlob();
      saveAs(blob, PDF_FILE_NAME);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderButtons = (loading: boolean, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (step === PlaningStep.S0_Start) {
      return (
        <Button type="primary" className="black-btn mt-[92px] !w-[300px]" onClick={handleNextStep}>
          GO
        </Button>
      );
    }

    if (step === PlaningStep.S6_Finish) {
      return (
        <Button
          type="primary"
          className="black-btn mt-[92px] uppercase !w-[300px]"
          loading={loading}
          // onClick={handleNextStep}
          onClick={async () => {
            await generatePdfDocument();
          }}
        >
          Download here
        </Button>
      );
    }

    if (step === PlaningStep.S7_Downloading || step === PlaningStep.S8_ThankYou) {
      return null;
    }

    return (
      <div className="mt-[92px] flex gap-5">
        <Button type="primary" className="black-btn" onClick={handlePrevStep}>
          <div className="flex items-center gap-3 justify-center">
            <ArrowLeftOutlined />
            <span>Back</span>
          </div>
        </Button>

        <Button type="primary" className="black-btn" disabled={isDisableNextStep()} onClick={handleNextStep}>
          <div className="flex items-center gap-3 justify-center">
            <span>Next</span>
            <ArrowRightOutlined />
          </div>
        </Button>
      </div>
    );
  };

  return (
    <div className={`${className} pt-5 pb-12 flex flex-col items-center`}>
      {renderCurrStepComponent()}
      {renderButtons(loading, handleLoading)}
    </div>
  );
}
