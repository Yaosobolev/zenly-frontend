import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const FormSchema = z
  .object({
    username: z
      .string()
      .min(1, {
        message: "Нужно заполнить поле.",
      })
      .min(4, {
        message: "Имя пользователя должно состоять минимум из 4 символов.",
      })
      .max(40, {
        message: "Имя пользователя должно состоять максимум из 40 символов.",
      })
      .regex(/^[a-zA-Z0-9_]{4,40}$/, {
        message:
          "Имя пользователя должно состоять только из латинских букв, цифр и знака подчеркивания.",
      }),
    password: z
      .string()
      .min(1, {
        message: "Нужно ввести пароль.",
      })
      .min(8, { message: "Пароль должен состоять минимум из 8 символов." })
      .max(40, {
        message: "Пароль должен состоять максимум из 40 символов.",
      })
      .regex(/^[a-zA-Z0-9_]{4,40}$/, {
        message:
          "Пароль должен состоять только из латинских букв, цифр и знака подчеркивания.",
      }),
    confirmPassword: z
      .string()
      .min(1, {
        message: "Нужно подтвердить пароль.",
      })
      .min(8, { message: "Пароль должен состоять минимум из 8 символов." })
      .max(40, {
        message: "Пароль должен состоять максимум из 40 символов.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Пароли не совпадают.",
  });

const RegistrationForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 max-700:w-full"
      >
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Введите имя пользователя" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Введите ваш пароль"
                    isPassword={true}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Подтвердите пароль"
                    isPassword={true}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full h-14 bg-green-500   text-lg rounded-xl  hover:bg-green-600"
            type="submit"
          >
            Создать
          </Button>
        </div>
        <p className=" text-center text-muted-foreground mt-2 max-550:text-sm">
          Уже есть аккаунт?{" "}
          <Link to="/login" className="text-green-500 hover:text-green-600">
            Авторизуйтесь
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default RegistrationForm;