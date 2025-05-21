import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

const ManualDownload = ({ filePath }: { filePath: string }) => {
  return (
    <div className="py-10 flex items-center justify-center">
      <Button variant="outline" asChild className="gap-2 px-6 py-4 text-base">
        <Link
          href={filePath}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Download className="w-5 h-5" />
          Download Manual Book (PDF)
        </Link>
      </Button>
    </div>
  );
};

export default ManualDownload;
