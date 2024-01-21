"use client";
import * as yup from "yup";
import { Building2 } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import InputLabel from "@/components/Input/InputLabel";
import useUiProvider from "@/stores/uiProvider/useUi.store";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { GhovidentFactory } from "@/constants/contract.constant";
import { ghovidentFactoryAbi } from "@/constants/ghovidentFactoryAbi";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

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
  walletAddress: string;
  linkInfo: string;
};

const createCompanySchema = yup
  .object({
    companyName: yup.string().required("Please,fill the company's name"),
    walletAddress: yup.string().required("Please,fill the wallet address"),
    linkInfo: yup.string().required("Please,fill the link information"),
  })
  .required();

const RegisterCompanyModal = () => {
  const { address } = useAccount();
  const { closeModal } = useUiProvider();
  const router = useRouter();

  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      walletAddress: address,
    },
    resolver: yupResolver(createCompanySchema),
  });

  const { config, isSuccess, error } = usePrepareContractWrite({
    address: GhovidentFactory,
    abi: ghovidentFactoryAbi,
    functionName: "createCompany",
    args: [getValues("companyName"), getValues("linkInfo")],
  });

  const { data: dataCreate, isLoading, write } = useContractWrite(config);

  const { data: dataCreated, isLoading: isLoadingCreated } =
    useWaitForTransaction({
      hash: dataCreate?.hash,
    });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    write?.();
  };

  useEffect(() => {
    if (dataCreated && dataCreated.status === "success") {
      toast({
        title: "Successfully",
        description: "Created Provident fund  successfully",
      });
      closeModal();
      router.refresh();
    }
  }, [dataCreated]);

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
              label="Wallet Address"
              placeholder="0x..."
              isError={Boolean(errors.walletAddress)}
              errorMessage={errors.walletAddress?.message || ""}
              defaultValue={getValues("walletAddress") || ""}
              disabled={true}
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
            <Button type="submit" disabled={isLoadingCreated}>
              {isLoading ? (
                <span className="animate-bounce">Loading...</span>
              ) : (
                <span>Create</span>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCompanyModal;
