export const MessageItem: React.FC = () => {
  const sender = true;
  return (
    <div
      className={`${
        !sender ? "bg-white mr-auto " : "ml-auto bg-[#5AB2FF] "
      } relative px-3 py-4 rounded-2xl  w-fit max-w-[60%] `}
    >
      <div className="flex flex-col">
        <span className="break-all ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <div className=" text-black text-xs self-end">
          {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
};
// absolute bottom-3 z-50 right-1
