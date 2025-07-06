import Link from "next/link";
import { auth } from "@/root/auth";
import UserProfileButton from "./UserProfileButton";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-10 py-3 bg-white shadow-sm fixed top-0 w-full">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl text-black font-extrabold uppercase">
            <span className="text-red-500">O</span>Auth
          </h1>
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <UserProfileButton
                name={session?.user?.name}
                email={session?.user?.email}
                image={session?.user?.image}
              />
            </>
          ) : (
            <Link href="/login" className="font-semibold">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
