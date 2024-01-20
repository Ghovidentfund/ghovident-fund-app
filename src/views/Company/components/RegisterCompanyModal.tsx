import * as yup from "yup";
import { Building2 } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import InputLabel from "@/components/Input/InputLabel";
import useUiProvider from "@/stores/uiProvider/useUi.store";

const Title = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="border p-2 rounded">
        <Building2 className="text-gray-500" />
      </div>
      <span className="font-bold">Create Company</span>
    </div>
  );
};

type Inputs = {
  companyName: string;
  email: string;
  walletAddress: string;
  linkInfo: string;
};

const createCompanySchema = yup
  .object({
    companyName: yup.string().required("Please,fill the company's name"),
    email: yup.string().email().required("Please,fill the email"),
    walletAddress: yup.string().required("Please,fill the wallet address"),
    linkInfo: yup.string().required("Please,fill the link information"),
  })
  .required();

const RegisterCompanyModal = () => {
  const { closeModal } = useUiProvider();

  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(createCompanySchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // TODO: Call smart contract for create company
    console.log(data);
  };

  return (
    <div>
      <Title />
      <div className="mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="space-y-4">
            <InputLabel
              require={true}
              label="Company name"
              placeholder="Name"
              isError={Boolean(errors.companyName)}
              errorMessage={errors.companyName?.message || ""}
              defaultValue={getValues("companyName") || ""}
              onChange={(e) => {
                setValue("companyName", e.target.value);
              }}
            />

            <InputLabel
              require={true}
              label="Contact Email"
              placeholder="Email"
              isError={Boolean(errors.email)}
              errorMessage={errors.email?.message || ""}
              defaultValue={getValues("email") || ""}
              onChange={(e) => {
                setValue("email", e.target.value);
              }}
            />

            <InputLabel
              require={true}
              label="Wallet Address"
              placeholder="0x..."
              isError={Boolean(errors.walletAddress)}
              errorMessage={errors.walletAddress?.message || ""}
              defaultValue={getValues("walletAddress") || ""}
              onChange={(e) => {
                setValue("walletAddress", e.target.value);
              }}
            />

            <InputLabel
              require={false}
              label="Link information"
              placeholder="https://..."
              isError={Boolean(errors.linkInfo)}
              errorMessage={errors.linkInfo?.message || ""}
              defaultValue={getValues("linkInfo") || ""}
              onChange={(e) => {
                setValue("linkInfo", e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-2 mt-7 gap-4">
            <Button type="button" variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCompanyModal;
