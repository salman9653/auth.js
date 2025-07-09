export const DividerWithText = ({ text, className }) => {
  return (
    <div className={`w-full flex items-center gap-x-2 ${className}`}>
      <div className="h-[1px] flex-grow bg-gray-200"></div>
      <span className="uppercase text-xs text-gray-500">{text}</span>
      <div className="h-[1px] flex-grow bg-gray-200"></div>
    </div>
  );
};
