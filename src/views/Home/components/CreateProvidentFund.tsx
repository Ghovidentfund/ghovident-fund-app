"use client";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { AreaChart, Plus } from "lucide-react";

import Modal from "@/components/Modal/Modal";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import InputLabel from "@/components/Input/InputLabel";

const Title = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="border p-2 rounded">
        <AreaChart className="text-gray-500" />
      </div>
      <span className="font-bold">Create Provident Fund</span>
    </div>
  );
};

type ProvidentFundPayload = {
  name: string;
  logoUri: string;
  factSheetUri: string;
  asset: string;
  risk: number;
  period: number;
  fundAddress: string;
};

const createProvidentFundSchema = yup
  .object({
    name: yup.string().required("Please,fill the fund's name"),
    logoUri: yup.string().email().required("Please,fill a link logo url"),
    factSheetUri: yup.string().required("Please,fill a link fact sheet uri"),
    asset: yup.string().required("Please,Select a token"),
    risk: yup.number().required("Please,Select a risk"),
    period: yup.number().required("Please,Select a period return"),
    fundAddress: yup.string().required("Please,fill the fund address"),
  })
  .required();

const CreateProvidentFund = () => {
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ProvidentFundPayload>({
    resolver: yupResolver(createProvidentFundSchema),
  });

  const onSubmit: SubmitHandler<ProvidentFundPayload> = (data) => {
    // TODO: Call smart contract for create company
    console.log(data);
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <Plus className="h-5 mr-2" />
        <span>Create provident fund</span>
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div>
          <Title />
          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="space-y-4">
                <InputLabel
                  require={true}
                  label="Provident fund name"
                  placeholder="Name"
                  isError={Boolean(errors.name)}
                  errorMessage={errors.name?.message || ""}
                  defaultValue={getValues("name") || ""}
                  onChange={(e) => {
                    setValue("name", e.target.value);
                  }}
                />

                <InputLabel
                  require={true}
                  label="Link logo"
                  placeholder="https://..."
                  isError={Boolean(errors.logoUri)}
                  errorMessage={errors.logoUri?.message || ""}
                  defaultValue={getValues("logoUri") || ""}
                  onChange={(e) => {
                    setValue("logoUri", e.target.value);
                  }}
                />

                <InputLabel
                  require={true}
                  label="Link fact sheet"
                  placeholder="https://..."
                  isError={Boolean(errors.factSheetUri)}
                  errorMessage={errors.factSheetUri?.message || ""}
                  defaultValue={getValues("factSheetUri") || ""}
                  onChange={(e) => {
                    setValue("factSheetUri", e.target.value);
                  }}
                />

                <InputLabel
                  require={true}
                  label="Token"
                  placeholder="https://..."
                  isError={Boolean(errors.asset)}
                  errorMessage={errors.asset?.message || ""}
                  defaultValue={getValues("asset") || ""}
                  onChange={(e) => {
                    setValue("asset", e.target.value);
                  }}
                />

                <InputLabel
                  require={true}
                  label="Risk"
                  placeholder="Low, Moderate, High or Very high"
                  isError={Boolean(errors.risk)}
                  errorMessage={errors.risk?.message || ""}
                  defaultValue={getValues("risk") || ""}
                  onChange={(e) => {
                    setValue("risk", Number(e.target.value));
                  }}
                />

                <InputLabel
                  require={true}
                  label="Returns in"
                  placeholder="1month , 3 months , 6 months and 1 year"
                  isError={Boolean(errors.risk)}
                  errorMessage={errors.risk?.message || ""}
                  defaultValue={getValues("risk") || ""}
                  onChange={(e) => {
                    setValue("risk", Number(e.target.value));
                  }}
                />

                <InputLabel
                  require={true}
                  label="Provident fund address"
                  placeholder="Contract address Ex. 0x..."
                  isError={Boolean(errors.fundAddress)}
                  errorMessage={errors.fundAddress?.message || ""}
                  defaultValue={getValues("fundAddress") || ""}
                  onChange={(e) => {
                    setValue("fundAddress", e.target.value);
                  }}
                />
              </div>
              <div className="grid grid-cols-2 mt-7 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Create</Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateProvidentFund;
