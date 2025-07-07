"use client";

import { useState } from "react";
// accepted types = "email" | "password" | "text" | "number"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const TextInput = ({
  label = "label",
  type = "text",
  className = "",
  icon = "",
  iconPosition = "left",
  error = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordType = showPassword ? "text" : "password";

  const baseStyles = `py-2 px-4 border-2 rounded-md outline-none w-full ${
    icon && iconPosition === "left" ? "pl-14" : "pr-14"
  }`;
  const errorStyle = error ? "border-red-400" : "";
  const combinedStyles = `${baseStyles} ${className} ${errorStyle}`;

  const errorMsg = error ? (
    <p className="text-red-500 text-xs font-medium">{error}</p>
  ) : null;
  return (
    <div className="flex flex-col justify-center w-full gap-1">
      <label htmlFor={props.name} className="text-sm text-[#aaa] capitalize">
        {label}
      </label>
      <div className="w-full flex items-center relative">
        <input
          type={type === "password" ? passwordType : type}
          className={combinedStyles}
          {...props}
        />
        {iconPosition === "left" ? (
          <div className="absolute left-4">{icon}</div>
        ) : (
          <div className="absolute right-4">{icon}</div>
        )}
        {type === "password" && (
          <div className="absolute right-4">
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaEye className="w-6 h-6 text-[#aaa] cursor-pointer" />
              ) : (
                <FaEyeSlash className="w-6 h-6 text-[#aaa] cursor-pointer" />
              )}
            </button>
          </div>
        )}
      </div>

      {errorMsg}
    </div>
  );
};

export default TextInput;
