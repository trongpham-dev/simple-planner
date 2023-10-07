import ExportPlannerImg from "assets/images/export-planner.png";

export default function StartingLayout() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-4xl mb-10">Start Building</h1>

      <div className="flex gap-10">
        <div>
          <img src={ExportPlannerImg} alt="start-landscape" width={570} className="" />
        </div>
      </div>
    </div>
  );
}
