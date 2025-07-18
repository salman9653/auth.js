import { Icon } from "@/lib/react-icons";

export const FormError = ({ message }) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 p-3  rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <Icon name="exclamationTriangle" className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
