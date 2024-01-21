import dynamic from "next/dynamic";

import { Typography } from "@/components/Typography";
import Container from "@/components/Common/Container";
import CreateProvidentFund from "./components/CreateProvidentFund";
import { Loader } from "lucide-react";

const ProvidentFundList = dynamic(
  () => import("./components/ProvidentFundList"),
  {
    ssr: false,
    loading: () => (
      <div className="py-10 text-lg font-semibold flex items-center text-gray-500">
        <span>Loading</span>
        <span>
          <Loader className="animate-spin" />
        </span>
      </div>
    ),
  }
);

const HomeView = () => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <Typography variant="topic" size="topic">
          Provident fund list
        </Typography>
        <CreateProvidentFund />
      </div>

      <ProvidentFundList />
    </Container>
  );
};

export default HomeView;
