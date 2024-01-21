import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SelectCustomProps {
  label: string;
  onChange: (value: string) => void;
  selectContent: React.ReactNode;
  require: boolean;
  isError: boolean;
  placeholder?: string;
  errorMessage?: string | undefined;
}

const SelectCustom = ({
  onChange,
  selectContent,
  label,
  require,
  isError,
  errorMessage,
  placeholder = "",
}: SelectCustomProps) => {
  return (
    <div>
      <div className="text-[#6C6D6D] mb-2 text-sm">
        <span>{label}</span>
        <span className="ml-2">{require ? "*" : "( Optional )"}</span>
      </div>
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-background">{selectContent}</SelectContent>
      </Select>
      {isError && <span className="text-red-500 text-xs">{errorMessage}</span>}
    </div>
  );
};

export default SelectCustom;
