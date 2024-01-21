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
        <div className="mt-3">{children}</div>

    </div>
  );
};

export default SubDetailContainer;
