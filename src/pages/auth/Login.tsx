import LoginForm from "@/components/form/LoginForm";

const Login: React.FC = () => {
  // const { isAuthenticated } = useAuth();
  return (
    <>
      <h2 className="text-3xl font-semibold mb-9 ">Авторизация</h2>
      <LoginForm />
    </>
  );
};

export default Login;
