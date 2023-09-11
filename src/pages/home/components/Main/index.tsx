import { Button } from "antd";
import StartingLayout from "pages/home/components/Main/ChooseOrientationLayout";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

type Props = {
  className?: string;
};

export default function Main({ className }: Props) {
  const { orientation } = useSelector(selectTheme());

  const isDisableNextButton = !orientation;

  return (
    <div className={`${className} pt-5 pb-12 flex flex-col items-center`}>
      <StartingLayout />

      <div className="mt-[92px] flex gap-5">
        <Button type="primary" className="black-btn">
          Back
        </Button>

        <Button type="primary" className="black-btn" disabled={isDisableNextButton}>
          Next
        </Button>
      </div>
    </div>
  );
}
