import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Auth Services | Login",
  description: "Auth services using next auth, Github and Google providers",
};

const Login = () => {
  return <LoginForm />;
};

export default Login;
