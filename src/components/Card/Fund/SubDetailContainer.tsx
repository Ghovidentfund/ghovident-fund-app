export interface SubDetailContainerProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

const SubDetailContainer = ({ label, children }: SubDetailContainerProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="text-gray-400 text-xs absolute top-0 min-w-[120px] w-full text-center">
        {label}
      </div>
      {children}
    </div>
  );
};

export default SubDetailContainer;
