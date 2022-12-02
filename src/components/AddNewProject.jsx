import Images from "../assets";
const AddNewProject = () => {
  return (
    <div className="rounded border-2 border-emerald-500 inline-block w-40 my-3 mr-auto">
      <div className="rounded border-b-2 border-emerald-500">
        Add New Project
      </div>
      <div className="flex flex-col grow justify-center items-center">
        <img src={Images.PlusImg} className="my-3" />
      </div>
    </div>
  );
};

export default AddNewProject;
