interface Props {
  heading: string;
  content: string;
}
export default function Step({ heading, content }: Props) {
  return (
    <div className="flex w-[168px] h-[48px] p-[16px_10px_10px_10px] justify-center items-center gap-[10px] bg-[#FFF] border-[#E1E1E1] border relative">
      <span>{content}</span>
      <div className="flex p-[0px_10px_4px_10px] justify-center items-center gap-[10px] absolute right-[57px] top-[-8px] bg-[#FFF]">
        <span className="text-[color:var(--greyscale-2,#C7C7C7)] text-xs not-italic font-semibold leading-4 tracking-[0.24px] uppercase">
          {heading}
        </span>
      </div>
    </div>
  );
}
