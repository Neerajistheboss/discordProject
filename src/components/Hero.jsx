import Images from "../assets";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="flex justify-between items-center border-2 border-emerald-500 rounded my-5 p-5">
      <div className="inline text-left">
        <h1 className="text-2xl font-bold">Welcome to The Speak Logic</h1>
        <p className="text-emerald-500 text-2xl font-bold">Problem Solver</p>
        <p>Think logically to solve problems</p>
      </div>
      <img className="w-1/2	" src={Images.HeroImg} />
    </div>
  );
};

export default Hero;
