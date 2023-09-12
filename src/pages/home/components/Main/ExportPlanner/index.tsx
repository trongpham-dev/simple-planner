import ExportPdfPlanner from "assets/images/export-planner.png";

export const ExportPlanner = () => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <h1 className="font-medium text-4xl mb-10 text-center">
        Your customized planner is now ready. Download to use
      </h1>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            src={ExportPdfPlanner}
            alt="landscape-weekly-boxed-primary"
            width={360}
          />
        </div>
      </div>
    </div>
  );
};
