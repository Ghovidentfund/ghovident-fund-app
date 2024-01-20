import dynamic from "next/dynamic";

import Logo from "@/components/common/Navbar/Logo";
import MenuList from "@/components/common/Navbar/MenuList";
import { ConnectButtonSkeleton } from "@/components/common/ConnectButton";

const ConnectButton = dynamic(
  () => import("@/components/common/ConnectButton"),
  { ssr: false, loading: () => <ConnectButtonSkeleton /> }
);

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex justify-between items-center bg-white py-3">
        <div className="flex items-center space-x-12">
          <Logo />
          <MenuList />
        </div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
