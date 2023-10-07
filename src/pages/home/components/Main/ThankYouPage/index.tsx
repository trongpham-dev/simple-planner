import { Progress } from "antd";

export const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <h1 className="font-medium text-4xl mb-10 text-center uppercase">Thank you...</h1>
      <h2>Digital_Planner.pdf</h2>
      <div className="flex justify-center items-center">
        <Progress percent={50} showInfo={false} />
      </div>
    </div>
  );
};
