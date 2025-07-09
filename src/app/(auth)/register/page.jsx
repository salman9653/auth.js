import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Auth Services | Register",
  description: "Auth services using next auth, Github and Google providers",
};
const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
