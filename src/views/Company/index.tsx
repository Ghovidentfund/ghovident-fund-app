import Container from "@/components/Common/Container";
import MyProvidentList from "@/views/Company/components/MyProvidentFund";
import CompanyInformation from "@/views/Company/components/CompanyInformation";

const CompanyView = () => {
  return (
    <Container>
      <CompanyInformation />
      <MyProvidentList />
    </Container>
  );
};

export default CompanyView;
