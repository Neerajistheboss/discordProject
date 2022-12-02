import Socmed from "./Socmed";
import Images from "../assets";
const socmed = [Images.FB, Images.TW, Images.YT, Images.LI, Images.IG];
const Footer = () => {
  return (
    <>
      <div
        className="flex pt-12 px-20 text-white"
        style={{ backgroundColor: "#2F4858" }}
      >
        <div className="inline-block w-2/3">
          <img src={Images.LogoImg} />
          <p className="w-1/2 text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim
          </p>
          <div className="flex mt-8 pb-8">
            {socmed.map((imgsrc) => (
              <Socmed imgsrc={imgsrc} />
            ))}
          </div>
          <div></div>
        </div>
        <div className="w-1/3">
          <p className="text-lg font-bold text-left">
            Feel Free to share your queries
          </p>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#09273A" }}
        className="flex py-3 text-white text-left"
      >
        <p className="inline-block w-2/3 pl-20">2022 All Rights Reserved</p>
        <p className="w-1/3">Terms and Conditions</p>
      </div>
    </>
  );
};

export default Footer;
