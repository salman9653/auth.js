"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkButton = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  if (isLoginPage) {
    return (
      <Link href="/register" className="font-semibold">
        Register
      </Link>
    );
  } else {
    return (
      <Link href="/login" className="font-semibold">
        Login
      </Link>
    );
  }
};

export default LinkButton;
