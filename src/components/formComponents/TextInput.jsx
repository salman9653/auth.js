// accepted types = "email" | "password" | "text" | "number"

const TextInput = ({
  label = "label",
  id = "id",
  name = "name",
  type = "text",
  placeholder = "placeholder",
  className = "",
  ...props
}) => {
  const baseStyles = "py-2 px-4 border-2 rounded-md outline-none";
  const combinedStyles = `${baseStyles} ${className}`;
  return (
    <div className="flex flex-col justify-center w-full gap-1">
      <label htmlFor={name} className="text-sm text-[#aaa] capitalize">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={combinedStyles}
        {...props}
      />
    </div>
  );
};

export default TextInput;
