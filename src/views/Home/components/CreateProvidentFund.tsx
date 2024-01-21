"use client";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { AreaChart, Loader, Plus } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { returnsList, riskStatusList } from "@/constants/risk";

import Modal from "@/components/Modal/Modal";
import { Button } from "@/components/ui/button";
import { tokenList } from "@/constants/tokenList";
import TokenImg from "@/components/Token/TokenImg";
import { SelectItem } from "@/components/ui/select";
import RiskTag from "@/components/Status/Risk/RiskTag";
import InputLabel from "@/components/Input/InputLabel";
import SelectCustom from "@/components/Select/SelectCustom";
import {
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { GhovidentFactory } from "@/constants/contract.constant";
import { ghovidentFactoryAbi } from "@/constants/ghovidentFactoryAbi";
import { toast } from "@/components/ui/use-toast";

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
    logoUri: yup.string().required("Please,fill a link logo url"),
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
    reset,
    formState: { errors },
  } = useForm<ProvidentFundPayload>({
    resolver: yupResolver(createProvidentFundSchema),
  });

  const { chain } = useNetwork();

  const { config, error } = usePrepareContractWrite({
    address: GhovidentFactory,
    abi: ghovidentFactoryAbi,
    functionName: "createPool",
    args: [
      getValues("name"),
      getValues("asset"),
      getValues("fundAddress"),
      getValues("logoUri"),
      getValues("factSheetUri"),
      getValues("risk"),
      getValues("period"),
    ],
  });

  const { data: dataCreate, write, isLoading } = useContractWrite(config);

  const { data: dataCreated, isLoading: isLoadingCreated } =
    useWaitForTransaction({
      hash: dataCreate?.hash,
    });

  const onSubmit: SubmitHandler<ProvidentFundPayload> = async (data) => {
    setTimeout(() => {
      writeContract();
    }, 300);
  };

  const writeContract = () => {
    write?.();
  };

  useEffect(() => {
    if (dataCreated && dataCreated.status === "success") {
      toast({
        title: "Successfully",
        description: "Created Provident fund  successfully",
      });
      setOpen(false);
    }
  }, [dataCreated]);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <Plus className="h-5 mr-2" />
        <span>Create provident fund</span>
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} >
        <div>
          <Title />
          <div className="mt-5">
            {isLoadingCreated ? (
              <div className=" flex items-center justify-center min-h-[450px]">
                <div className="flex flex-col items-center justify-center">
                  <Loader className="animate-spin" width={32} height={32} />
                  <a
                    href={`${chain?.blockExplorers?.default.url}/tx/${dataCreate?.hash}`}
                    target="_blank"
                    className="underline mt-4 font-semibold"
                  >
                    View Explorer
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="space-y-4 overflow-auto max-h-[450px] px-1 py-2">
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

                  <SelectCustom
                    require={true}
                    label="Token"
                    placeholder="Select a token"
                    onChange={(e) => setValue("asset", e)}
                    isError={Boolean(errors.asset)}
                    errorMessage={errors.asset?.message || ""}
                    selectContent={
                      <>
                        {tokenList.map((token) => {
                          return (
                            <SelectItem
                              key={token.address}
                              value={token.address}
                            >
                              <div className="flex items-center space-x-3">
                                <TokenImg symbol={token.symbol} />
                                <span>{token.symbol}</span>
                              </div>
                            </SelectItem>
                          );
                        })}
                      </>
                    }
                  />

                  <SelectCustom
                    require={true}
                    label="Risk"
                    placeholder="Select risk level"
                    onChange={(e) => setValue("risk", Number(e))}
                    isError={Boolean(errors.risk)}
                    errorMessage={errors.risk?.message || ""}
                    selectContent={
                      <>
                        {riskStatusList.map((risk) => {
                          return (
                            <SelectItem
                              key={risk.value}
                              value={String(risk.value)}
                            >
                              <RiskTag period={risk.period} />
                            </SelectItem>
                          );
                        })}
                      </>
                    }
                  />

                  <SelectCustom
                    require={true}
                    label="Returns in"
                    placeholder="Select return level"
                    onChange={(e) => setValue("period", Number(e))}
                    isError={Boolean(errors.period)}
                    errorMessage={errors.period?.message || ""}
                    selectContent={
                      <>
                        {returnsList.map((item) => {
                          return (
                            <SelectItem
                              key={item.value}
                              value={String(item.value)}
                            >
                              {item.label}
                            </SelectItem>
                          );
                        })}
                      </>
                    }
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
                    onClick={() => {
                      setOpen(false);
                      reset();
                    }}
                    disabled={isLoadingCreated}
                  >
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
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateProvidentFund;
