"use client";

import { useActionState, useState } from "react";
import Button from "./formComponents/Button";
import TextInput from "./formComponents/TextInput";
import { credentialLogin, credentialRegister } from "@/actions";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useFormStatus } from "react-dom";

const CredentialAuthForm = ({ type }) => {
  const { pending } = useFormStatus();
  const [state, formAction] = useActionState(
    type === "register" ? credentialRegister : credentialLogin,
    {
      message: "",
      errors: {},
    }
  );
  // const [errors, setErrors] = useState({});
  // const handleSubmit = async (formData) => {
  //   try {
  //     if (type === "register") {
  //       await credentialRegister(formData);
  //     } else {
  //       await credentialLogin(formData);
  //     }
  //     // Handle successful login
  //   } catch (error) {
  //     try {
  //       const errorObj = JSON.parse(error.message);
  //       setErrors(errorObj);
  //     } catch (e) {
  //       console.error("Login failed:", error);
  //     }
  //   }
  // };

  return (
    <form
      action={formAction}
      className="w-full py-6 px-6 rounded-xl flex flex-col gap-4 justify-center"
    >
      {type === "register" && (
        <TextInput
          label="name"
          name="name"
          type="text"
          placeholder="John Doe"
          className="border-[#444] bg-[#333]"
          error={state?.errors?.name}
          icon={<MdPerson className="w-6 h-6 text-[#aaa]" />}
        />
      )}
      <TextInput
        label="email"
        name="email"
        type="email"
        placeholder="username@domain.com"
        className="border-[#444] bg-[#333]"
        error={state?.errors?.email}
        icon={<MdEmail className="w-6 h-6 text-[#aaa]" />}
      />
      <TextInput
        label="password"
        name="password"
        type="password"
        placeholder="• • • • • • • •"
        className="border-[#444] bg-[#333]"
        error={state?.errors?.password}
        icon={<MdLock className="w-6 h-6 text-[#aaa]" />}
      />
      <Button version="primary" className="mt-4" type="submit">
        {type}
        {state.pending ? "Loading" : type}
        {/* {pending ? "pending" : type} */}
      </Button>
    </form>
  );
};

export default CredentialAuthForm;
