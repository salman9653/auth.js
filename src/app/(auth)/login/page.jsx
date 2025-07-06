import CredentialAuthForm from "@/components/CredentialAuthForm";
import OAuthLogin from "@/components/OAuthLogin";

export const metadata = {
  title: "Auth Services | Login",
  description: "Auth services using next auth, Github and Google providers",
};

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <div className="w-full space-y-4">
        <CredentialAuthForm type="login" />
        <div className="w-full flex flex-col items-center gap-4">
          <p className="uppercase text-sm font-medium text-[#aaa]">
            or Login with
          </p>
        </div>
      </div>
      <OAuthLogin />
    </div>
  );
};

export default page;
