import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[#242424]">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth Service
        </h1>
        <p className="text-white text-lg">
          A simple auth service that uses Next.js 15 and auth.js
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default page;
