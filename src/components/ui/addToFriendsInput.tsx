// import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSendRequestToFriend } from "@/api/hooks/useFriendship";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input, Button } from "../";

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
