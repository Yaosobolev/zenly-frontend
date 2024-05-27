import { IoIosSend } from "react-icons/io";

import { Input } from "../";
import { useState } from "react";

export const MessageInput: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
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
