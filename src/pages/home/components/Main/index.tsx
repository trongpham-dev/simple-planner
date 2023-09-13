import { Button } from "antd";
import StartingLayout from "pages/home/components/Main/ChooseOrientationLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";
import { SelectWeeklyLayout } from "./ChooseWeeklyLayout";
import { nextStep, prevStep, selectStep } from "stores/reducers/step";
import { SelectDailyLayout } from "./ChooseDailyLayout";
import { ExportPlanner } from "./ExportPlanner";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MainDocument from "pages/MainDocument";
import { store } from "stores";

type Props = {
  className?: string;
};

export default function Main({ className }: Props) {
  const { orientation } = useSelector(selectTheme());
  const { step } = useSelector(selectStep());
  const dispatch = useDispatch();

  const isDisableNextButton = !orientation;

  const handleNextStep = () => {
    dispatch(nextStep());
  };
  const handlePrevStep = () => {
    dispatch(prevStep());
  };

  const renderCurrStepComponent = () => {
    if (step === 1) return <StartingLayout />;
    if (step === 2) {
      console.log(step);
      return <SelectWeeklyLayout />;
    }
    if (step === 3) return <SelectDailyLayout />;
    if (step === 4) return <ExportPlanner />;
    return <StartingLayout />;
  };

  const renderButtons = () => {
    if (step === 4)
      return (
        <Button type="primary" className="black-btn">
          <PDFDownloadLink
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
          </PDFDownloadLink>
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
          Back
        </Button>

        <Button
          type="primary"
          className="black-btn"
          disabled={step === 4}
          onClick={handleNextStep}
        >
          Next
        </Button>
      </div>
    );
  };

  return (
    <div className={`${className} pt-5 pb-12 flex flex-col items-center`}>
      {renderCurrStepComponent()}
      {renderButtons()}
    </div>
  );
}
