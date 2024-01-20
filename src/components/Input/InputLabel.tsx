import { Input, InputProps } from "../ui/input";

export interface InputLabelProps extends InputProps {
  require: boolean;
  label: string;
  isError: boolean;
  errorMessage?: string | undefined;
  placeholder?: string;
}

const InputLabel = ({
  require,
  label,
  placeholder = "",
  isError,
  errorMessage,
  ...rest
}: InputLabelProps) => {
  return (
    <div id={label}>
      <div className="text-[#6C6D6D] mb-2 text-sm">
        <span>{label}</span>
        <span className="ml-2">{require ? "*" : "(optional)"}</span>
      </div>
      <Input placeholder={placeholder} {...rest} />
      {isError && <span className="text-red-500 text-xs">{errorMessage}</span>}
    </div>
  );
};

export default InputLabel;
