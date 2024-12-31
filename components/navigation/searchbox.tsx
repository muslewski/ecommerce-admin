import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Searchbox() {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search products..."
        className="h-9 w-full pl-8 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
      />
    </div>
  );
}
