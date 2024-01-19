import Container from "@/components/common/Container";
import { Typography } from "@/components/common/Typography";

const HomeView = () => {
  return (
    <Container>
      <Typography variant="topic" size="topic">
        Provident fund list
      </Typography>
      <section id="provident fund list" className="my-12">
        <div>Provident Fund Card</div>
      </section>
    </Container>
  );
};

export default HomeView;
