"use client";

import { Icon } from "@/lib/react-icons";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

export const Social = () => {
  const onClick = (provider) => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="w-full flex items-center gap-x-2">
      <div className="w-full">
        <Button
          size="lg"
          className="w-full cursor-pointer"
          variant="outline"
          onClick={() => onClick("google")}
        >
          <Icon name="google" className="w-5 h-5" />
        </Button>
      </div>
      <div className="w-full">
        <Button
          size="lg"
          className="w-full cursor-pointer"
          variant="outline"
          onClick={() => onClick("github")}
        >
          <Icon name="github" className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
