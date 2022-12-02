import Images from "../assets";
const ProjectBrief = () => {
  return (
    <div className="rounded border-2 border-emerald-500 inline-block mt-3 w-48">
      <div className="rounded border-b-2 border-emerald-500 py-2 ">
        <p className="text-bold text-lg">Project 1</p>
      </div>
      <p className="mt-5">Problem</p>
      <p>Dirty Oil</p>
      <p className="mt-5">Solution</p>
      <p>New Oil</p>
      <p className="mt-5">12:12:2022</p>
      <span className="inline-block mb-5">
        <img src={Images.EditImg} className="inline px-1" />
        <img src={Images.DeleteImg} className="inline px-1" />
      </span>
    </div>
  );
};
export default ProjectBrief;
