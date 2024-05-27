import { MessageItem } from "../";

export const MessageContent: React.FC = () => {
  const test = new Array<string>(1).fill("");
  return (
    <div className="flex flex-col-reverse px-3 space-y-3 h-full overflow-auto scroll-my-2 pb-4 mb-auto w-full">
      {test.map(() => {
        return (
          <div className="px-3 text-black" key={Math.random()}>
            <MessageItem />
          </div>
        );
      })}
    </div>
  );
};
