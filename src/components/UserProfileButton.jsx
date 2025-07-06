"use client";
import Image from "next/image";
import { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { logout } from "@/actions";

const UserProfileButton = ({ name, email, image }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="relative">
      <button
        className="border-2 border-gray-300 pr-4 p-1 rounded-lg hover:bg-[#eee] cursor-pointer flex items-center gap-2"
        onClick={() => {
          setShowProfileMenu((prev) => !prev);
        }}
      >
        <Image
          src={image}
          alt="user image"
          width={40}
          height={40}
          className="rounded-md"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs text-[#333]">
            {email?.slice(0, 16)}
            {email.length > 16 ? "..." : ""}
          </p>
        </div>
      </button>
      {showProfileMenu && (
        <div className="absolute bottom-[-180px] right-0 flex flex-col gap-2 items-start bg-white rounded-lg py-2 w-max">
          <div className="flex gap-2 items-center px-2">
            <Image
              src={image}
              alt="user image"
              width={60}
              height={60}
              className="rounded-full border-2 border-gray-300 "
            />
            <div className="flex flex-col items-start justify-center">
              <p className="text-lg font-bold">{name}</p>
              <p className="text-sm text-[#333] px-2 py-px rounded-md bg-green-200 overflow-hidden text-ellipsis whitespace-nowrap">
                {email}
              </p>
            </div>
          </div>
          <div className="w-full">
            <Link
              href={"/userProfile"}
              className="w-full flex justify-between items-center p-2 px-4 hover:bg-gray-200 cursor-pointer"
            >
              <span className="font-medium">Profile</span>
              <IoIosArrowForward className="w-4.5 h-4.5" />
            </Link>
            <button
              onClick={logout}
              className="w-full flex justify-between items-center p-2 px-4 hover:bg-gray-200 cursor-pointer text-red-600"
            >
              <span className="font-medium">Logout</span>
              <IoLogOutOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileButton;
