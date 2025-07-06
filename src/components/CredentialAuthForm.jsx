import Button from "./formComponents/Button";
import TextInput from "./formComponents/TextInput";

const CredentialAuthForm = ({ type }) => {
  return (
    <form
      className="w-full py-6 px-6 rounded-xl flex flex-col gap-4 justify-center"
      //   action={credentialLogin}
    >
      <TextInput
        label="email"
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        className="border-[#444] bg-[#333]"
      />
      <TextInput
        label="password"
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        className="border-[#444] bg-[#333]"
      />

      <Button version="primary" className="mt-4" type="submit">
        {type}
      </Button>
    </form>
  );
};

export default CredentialAuthForm;
