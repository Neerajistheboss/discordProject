import AddNewProject from "./AddNewProject";
import ProjectBrief from "./ProjectBrief";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ProjectOverview = () => {
  return (
    <div className="grid grid-cols-6 gap-4 mt-12 mb-20">
      {data.map((num) => (
        <ProjectBrief />
      ))}
      <AddNewProject />
    </div>
  );
};

export default ProjectOverview;
