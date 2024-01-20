import Navbar from "@/components/Common/Navbar/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
