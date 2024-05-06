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
import { useLogin } from "@/hooks/useAuth";

const FormSchema = z.object({
  username: z.string(),
  // .min(1, {
  //   message: "Нужно заполнить поле.",
  // })
  // .min(4, {
  //   message: "Имя пользователя должно состоять минимум из 4 символов.",
  // })
  // .max(40, {
  //   message: "Имя пользователя должно состоять максимум из 40 символов.",
  // })
  // .regex(/^[a-zA-Z0-9_]{4,40}$/, {
  //   message:
  //     "Имя пользователя должно состоять только из латинских букв, цифр и знака подчеркивания.",
  // }),
  password: z.string(),
  // .min(1, {
  //   message: "Нужно ввести пароль.",
  // })
  // .min(8, { message: "Пароль должен состоять минимум из 8 символов." })
  // .max(40, {
  //   message: "Пароль должен состоять максимум из 40 символов.",
  // })
  // .regex(/^[a-zA-Z0-9_]{4,40}$/, {
  //   message:
  //     "Пароль должен состоять только из латинских букв, цифр и знака подчеркивания.",
  // }),
});

const LoginForm = () => {
  const loginMutation = useLogin();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    loginMutation.mutate(data);
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
          <Button
            className="w-full h-14 bg-green-500 text-lg rounded-xl hover:bg-green-600"
            type="submit"
          >
            Войти
          </Button>
        </div>
        <p className="text-center text-muted-foreground mt-2 max-550:text-sm">
          Нету аккаунта?{" "}
          <Link
            to="/register"
            className="text-green-500 transition-all hover:text-green-600 hover:underline"
          >
            Зарегистрируйтесь
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
