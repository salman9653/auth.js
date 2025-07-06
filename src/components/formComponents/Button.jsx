import React from "react";

const Button = ({
  version = "primary",
  size = "normal",
  className = "",
  type = "button",
  children,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-75 transition ease-in-out duration-150 cursor-pointer capitalize";

  const versionStyles = {
    primary: "bg-[#444] text-white hover:bg-[#4a4a4a] focus:ring-[#444]",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    blue: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
    red: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
    green: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400",
    yellow:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",
    "outline-primary":
      "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    "outline-secondary":
      "bg-transparent border border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500",
    "outline-blue":
      "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-400",
  };

  const sizeStyles = {
    small: "text-sm",
    normal: "text-base",
    large: "text-lg px-6 py-3",
  };

  const combinedStyles = `${baseStyles} ${versionStyles[version]} ${sizeStyles[size]} ${className}`;

  return (
    <button type={type} className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
