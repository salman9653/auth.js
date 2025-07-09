import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "./Header";
import { Social } from "./Social";
import { BackButton } from "./BackButton";
import { DividerWithText } from "../DividerWithText";

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>

      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardContent>
          <DividerWithText text="or continue with" className="mb-4" />
          <Social />
        </CardContent>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
