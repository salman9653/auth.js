import { CardWrapper } from "./CardWrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcom Back"
      backButtonLabel="Don't have an accounts?"
      backButtonHref="/register"
      showSocial
    >
      Login form
    </CardWrapper>
  );
};
