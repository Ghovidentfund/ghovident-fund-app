import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/home"} id="logo">
      <div className="flex items-center space-x-2">
        <Image
          src={"/assets/logo.png"}
          width={30}
          height={30}
          alt="provident-fund-logo"
        />
        <h1 className="text-xl font-bold text-primary">Ghovident</h1>
      </div>
    </Link>
  );
};

export default Logo;
