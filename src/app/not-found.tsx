import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchSlash } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <SearchSlash size={80} className="text-muted-foreground mb-6" />
      <SectionTitle
        title="Oops! Page not found"
        details="We couldn’t find the page you were looking for."
      />
      <Button variant="outline" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
