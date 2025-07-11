import { CardWrapper } from "@/components/auth/CardWrapper";
import { Icon } from "@/lib/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong."
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <div className="w-full flex items-center justify-center">
        <Icon
          name="exclamationTriangle"
          className="text-destructive w-10 h-10"
        />
      </div>
    </CardWrapper>
  );
};
