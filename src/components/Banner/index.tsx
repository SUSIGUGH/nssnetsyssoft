import CTA from "../CTA";

const Banner = () => {
  return (
    <div
      className={` banner w-full h-[80vh] bg-cover bg-center  flex items-center justify-center relative `}
      style={{
        backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1024/1*OoQd-korhj299qYSmt25Tg.png')`,
        backgroundSize: "cover",
      }}
    >

<CTA/>
     
    </div>
  );
};

export default Banner;
