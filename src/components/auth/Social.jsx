"use client";

import { Icon } from "@/lib/react-icons";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <div className="w-full">
        <Button size="lg" className="w-full" variant="outline">
          <Icon name="google" className="w-5 h-5" />
        </Button>
      </div>
      <div className="w-full">
        <Button size="lg" className="w-full" variant="outline">
          <Icon name="github" className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
