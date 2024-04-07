import logo from '@/assets/nss-logo01.png';
import Image from "next/image";
const Logo = () => {
  return (
    <div className="logo flex justify-center items-center flex-2">
      <Image
        src={logo}
        alt="Logo"
        height={100}
        width={100}
        className="w-100 h-100 object-cover"
      />
    </div>
  );
};

export default Logo;
