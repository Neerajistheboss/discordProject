import Images from "../assets";
const menuItems = [
  { isActive: true, menu: "Dashboard" },
  { isActive: false, menu: "Problem" },
  { isActive: false, menu: "Solution" },
  { isActive: false, menu: "Solution function" },
  { isActive: false, menu: "Settings" },
  { isActive: false, menu: "Quiz" },
];
const Navbar = () => {
  return (
    <div className="border-b-2 border-emerald-500">
      <div className="container mx-auto">
        <div className="flex p-3 justify-between ">
          <img className="inline" src={Images.LogoImg} alt="logo" />
          <div>
            {menuItems.map((item) => (
              <span
                className={`px-3 ${
                  item.isActive ? "font-bold text-emerald-500" : ""
                }`}
              >
                {item.menu}
              </span>
            ))}
            <img className="inline" src={Images.UserImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
