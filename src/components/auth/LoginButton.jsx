"use client";

import { useRouter } from "next/navigation";

const LoginButton = ({ children, mode = "redirect", asChild }) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/login");
  };

  if (mode === "modal") {
    return <span>Todo: Inplement modal</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default LoginButton;
