import dynamic from "next/dynamic";

import Logo from "@/components/Common/Navbar/Logo";
import MenuList from "@/components/Common/Navbar/MenuList";
import { ConnectButtonSkeleton } from "@/components/Common/ConnectButton";

const ConnectButton = dynamic(
  () => import("@/components/Common/ConnectButton"),
  { ssr: false, loading: () => <ConnectButtonSkeleton /> }
);

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex justify-between items-center bg-white py-3 min-h-16">
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
