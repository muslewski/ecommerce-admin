import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface AlertErrorProps {
  title?: string;
  description: string;
}

export default function AlertError({
  title = "Error",
  description,
}: AlertErrorProps) {
  return (
    <Alert variant="destructive" className="w-fit">
      <AlertTitle className="flex gap-2">
        <AlertCircle className="h-4 w-4" />
        {title}
      </AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
