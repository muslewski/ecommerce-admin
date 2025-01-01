import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

interface AlertSuccessProps {
  title?: string;
  description: string;
}

export default function AlertSuccess({
  title = "Success",
  description,
}: AlertSuccessProps) {
  return (
    <Alert
      variant="default"
      className="border-green-500 bg-green-50 text-green-700 w-fit"
    >
      <AlertTitle className="flex gap-1">
        <CheckCircle2 className="h-4 w-4" />
        {title}
      </AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
