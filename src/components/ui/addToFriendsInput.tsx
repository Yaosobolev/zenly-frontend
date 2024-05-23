// import { useState } from "react";
import { Button } from "./button";
import { useSendRequestToFriend } from "@/api/hooks/useFriendship";

import { useParams } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  receiverId: z
    .string()
    .min(1, {
      message: "Заполните поле",
    })
    .regex(/^\d+$/, {
      message: "Значение должно быть числом",
    }),
});

export const AddToFriendsInput: React.FC = () => {
  const sendRequestToFriendMutation = useSendRequestToFriend();
  const { userId } = useParams();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      receiverId: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formDataWithUserId = {
      ...data,
      senderId: userId || "",
    };
    sendRequestToFriendMutation.mutate(formDataWithUserId);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-wull space-y-3 px-2 "
      >
        <FormField
          control={form.control}
          name="receiverId"
          render={({ field }) => (
            <FormItem>
              <h2 className="text-xl text-center mb-2">Добавь друга</h2>
              <FormControl>
                <Input
                  placeholder="Введите ID друга"
                  className=" h-10 rounded-md  focus-visible:ring-[#5AB2FF] focus-visible:ring-1"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#5AB2FF] py-4 px-4 h-0 hover:opacity-50 hover:bg-[#5AB2FF]">
          Добавить
        </Button>
      </form>
    </Form>
  );
};
// export const AddToFriendsInput: React.FC = () => {
//   const sendRequestToFriendMutation = useSendRequestToFriend();

//   const { userId } = useParams();

//   const [data, setData] = useState<sendRequestToFriendData>({
//     receiverId: "",
//     senderId: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setData({
//       receiverId: e.target.value,
//       senderId: userId,
//     });
//   };
//   const { receiverId } = data;

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     sendRequestToFriendMutation.mutate(data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="receiverId"
//         value={receiverId}
//         onChange={handleChange}
//         type="text"
//       />
//       <Button type="submit"></Button>
//       <span className="text-3xl text-black"></span>
//     </form>
//   );
// };
