export interface SubDetailContainerProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

const SubDetailContainer = ({ label, children }: SubDetailContainerProps) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="text-gray-400 text-xs top-0 min-w-[120px] w-full text-center">
        {label}
      </div>
      <div className="flex flex-col flex-1 items-center justify-center">{children}</div>
    </div>
  );
};

export default SubDetailContainer;
