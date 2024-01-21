"use client";

import FundInformation from "@/components/Card/Fund/FundInformation";
import InputLabel from "@/components/Input/InputLabel";
import TokenImg from "@/components/Token/TokenImg";
import { Button } from "@/components/ui/button";
import { ERC20Abi } from "@/constants/ERC20Abi";
import { ghovidentPoolAbi } from "@/constants/ghovidentPoolAbi";
import { tokens } from "@/constants/tokenList";
import useProvidentFund from "@/stores/providentFund/useProvidentFund.store";
import useUiProvider from "@/stores/uiProvider/useUi.store";
import { BookDownIcon, CheckCircle, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { parseEther } from "viem";
import {
  useAccount,
  useBalance,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

const Title = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="border p-2 rounded">
        <BookDownIcon className="text-gray-500" />
      </div>
      <span className="font-bold">Buy</span>
      <span className="font-bold text-blue-600">{name}</span>
    </div>
  );
};

enum StepBuy {
  APPROVE = "approve",
  BUY = "buy",
  SUCCESS = "success",
}

const BuyProvidentFundModal = () => {
  const { closeModal } = useUiProvider();
  const { providentFund } = useProvidentFund();

  const [amount, setAmount] = useState<number>(0);
  const [step, setStep] = useState<string>(StepBuy.APPROVE);

  const { address } = useAccount();
  const { data } = useBalance({
    address,
    token: providentFund.assets as `0x${string}`,
  });

  // Approve
  const { config: configApprove } = usePrepareContractWrite({
    address: providentFund.assets as `0x${string}`,
    abi: ERC20Abi,
    functionName: "approve",
    args: [providentFund.thisAddress, parseEther(String(amount))],
  });

  const {
    data: dataApprove,
    write: writeApprove,
    isLoading: isLoadingApprove,
  } = useContractWrite(configApprove);

  const { data: dataApproved, isLoading: isLoadingApproved } =
    useWaitForTransaction({
      hash: dataApprove?.hash,
    });

  // Buy
  const { config: configBuy } = usePrepareContractWrite({
    address: providentFund.thisAddress as `0x${string}`,
    abi: ghovidentPoolAbi,
    functionName: "supply",
    args: [parseEther(String(amount))],
  });

  const {
    data: dataBuy,
    write: writeBuy,
    isLoading: isLoadingBuy,
  } = useContractWrite(configBuy);

  const { data: dataBought, isLoading: isLoadingBought } =
    useWaitForTransaction({
      hash: dataBuy?.hash,
    });

  const handleApprove = () => {
    writeApprove?.();
  };

  const handleBuy = () => {
    writeBuy?.();
  };

  useEffect(() => {
    if (dataApproved && dataApproved.status === "success") {
      setStep(StepBuy.BUY);
    }
  }, [dataApproved]);

  useEffect(() => {
    if (dataBought && dataBought.status === "success") {
      setStep(StepBuy.SUCCESS);
    }
  }, [dataBought]);

  return (
    <div>
      <Title name={providentFund.name} />
      {step !== StepBuy.SUCCESS && (
        <div className="flex flex-col space-y-3">
          <div className="mt-4 border p-3 rounded-md shadow-md">
            <FundInformation
              fundName={providentFund.name}
              fundLogoUrl={providentFund.logoUri}
              risk={providentFund.risk}
              factSheetUrl={providentFund.factSheetUri}
            />
          </div>

          <div className="flex items-center space-x-2">
            <span>Token Support : </span>
            <div className="flex items-center space-x-1 font-semibold">
              <TokenImg symbol={tokens[providentFund.assets].symbol} />
              <div>{tokens[providentFund.assets].symbol}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span>Balance : </span>
            <div className="flex items-center space-x-1 font-semibold">
              <span>{data?.formatted}</span>
              <div>{tokens[providentFund.assets].symbol}</div>
            </div>
          </div>

          <InputLabel
            require={true}
            label="Amount"
            placeholder="Name"
            isError={false}
            errorMessage={""}
            defaultValue={""}
            min={0}
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
          />

          {step === StepBuy.APPROVE && (
            <Button
              variant="black"
              onClick={handleApprove}
              disabled={
                amount <= 0 ||
                isLoadingApproved ||
                amount >= Number(data?.formatted)
              }
            >
              {isLoadingApproved ? "Approving" : "Approve"}
            </Button>
          )}

          {step === StepBuy.BUY && (
            <Button
              onClick={handleBuy}
              disabled={isLoadingBuy || isLoadingBought}
              className="cursor-pointer"
            >
              {isLoadingBought ? "Buying" : "Buy"}
            </Button>
          )}
        </div>
      )}

      {step === StepBuy.SUCCESS && (
        <div className="flex flex-col items-center justify-center space-y-4 py-10 text-green-600">
          <CheckCircle width={72} height={72} />
          <div className="font-semibold ">Successfully</div>
          <Button onClick={closeModal}>Close</Button>
        </div>
      )}
    </div>
  );
};

export default BuyProvidentFundModal;
