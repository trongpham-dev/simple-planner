import { Button } from "antd";
import StartingLayout from "pages/home/components/Main/ChooseOrientationLayout";
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
import { store } from "stores";
import { selectWeekly } from "stores/reducers/weekly";
import { selectDaily } from "stores/reducers/daily";
import { saveAs } from "file-saver";
import { useState } from "react";

type Props = {
  className?: string;
};

const generatePdfDocument = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const blob = await pdf(
      <Provider store={store}>
        <MainDocument />
      </Provider>
    ).toBlob();
    saveAs(blob, "somename");
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

export default function Main({ className }: Props) {
  const { orientation } = useSelector(selectTheme());
  const { step } = useSelector(selectStep());
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

  const handleDisableNextStep = () => {
    if (step === 1 && orientation) return false;
    if (step === 2 && weeklyLayout) return false;
    if (step === 3 && dailyLayout) return false;
    return true;
  };

  const renderCurrStepComponent = () => {
    if (step === 1) return <StartingLayout />;
    if (step === 2) {
      return <SelectWeeklyLayout />;
    }
    if (step === 3) return <SelectDailyLayout />;
    if (step === 4) return <ExportPlanner />;
    return <StartingLayout />;
  };

  const renderButtons = (
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const disable = handleDisableNextStep();
    if (step === 4)
      return (
        <Button
          type="primary"
          className="black-btn mt-[92px]"
          loading={loading}
          onClick={async () => {
            await generatePdfDocument(setLoading);
          }}
        >
          {/* <PDFDownloadLink
            document={
              <Provider store={store}>
                <MainDocument />
              </Provider>
            }
            fileName="somename.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "DOWNLOAD HERE"
            }
          </PDFDownloadLink> */}
          Download
        </Button>
      );
    return (
      <div className="mt-[92px] flex gap-5">
        <Button
          type="primary"
          className="black-btn"
          onClick={handlePrevStep}
          disabled={step === 1}
        >
          <div className="flex items-center gap-3 justify-center">
            <ArrowLeftOutlined />
            <span>Back</span>
          </div>
        </Button>

        <Button
          type="primary"
          className="black-btn"
          disabled={disable}
          onClick={handleNextStep}
        >
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
