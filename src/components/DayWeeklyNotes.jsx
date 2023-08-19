import { Text } from "@react-pdf/renderer";

const DayWeeklyNotes = () => (
  <div className="flex flex-col items-center w-[182px] h-[230px] bg-[#EEE7DF] p-[8px_8px_24px_8px]">
    <div className="flex items-start p-[0px_8px_4px_8px] gap-[4px] self-stretch border-b-[0.5px_solid_#907B62]">
      <span className="text-[#f7dab6] text-[12px] not-italic font-[Clash Display] font-semibold leading-4 tracking-[0.24px] uppercase">
        <Text>NOTES</Text>
      </span>
    </div>
    <div className="flex-[1_0_0] flex-col items-start self-stretch pt-[8px]">
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.2px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.2px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.2px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.2px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.2px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.2px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.2px] border-solid border-b-[#EEE7DF]"></div>
    </div>
  </div>
);

export default DayWeeklyNotes;
