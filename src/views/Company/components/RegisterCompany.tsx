import { Button } from "@/components/ui/button";
import { Typography } from "@/components/Typography";

const RegisterCompany = () => {
  return (
    <section id="register company">
      <div className="flex flex-col justify-center items-center">
        <Typography variant="topic" size="topic">
          Before buy provident please register you company
        </Typography>
        <Button>Register Your Company</Button>
      </div>
    </section>
  );
};

export default RegisterCompany;
