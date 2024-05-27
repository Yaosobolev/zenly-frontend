import { IoIosSend } from "react-icons/io";

import { Input } from "../";
import { useState } from "react";
import { useSendMessage } from "@/api/hooks/useMessage";
import { useParams } from "react-router-dom";
import { friendshipRequest } from "@/types/friendship";

type MessageInputProps = {
  selectedFriend: friendshipRequest;
};

export const MessageInput: React.FC<MessageInputProps> = ({
  selectedFriend,
}) => {
  const [value, setValue] = useState<string>("");

  const Receiver = selectedFriend.receiver?.id || selectedFriend.sender?.id;

  const sendMessageMutation = useSendMessage();
  const { userId } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  console.log(selectedFriend);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
    sendMessageMutation.mutate({
      senderId: Number(userId),
      receiverId: Receiver!,
      content: value,
    });
  };

  console.log(value);

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <Input
          className="h-12 pr-14 rounded-none border-none  focus-visible:ring-0 focus-visible:ring-offset-0 "
          placeholder="Написать сообщения..."
          value={value}
          onChange={handleChange}
        />

        {value.length > 0 && (
          <button type="submit" className="absolute right-4 top-2">
            <IoIosSend
              type="submit"
              className=" size-9 rotate-45 text-[#5AB2FF] "
            />
          </button>
        )}
      </div>
    </form>
  );
};
