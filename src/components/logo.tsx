import Image from "next/image";

import { MuseoModerno } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const museo = MuseoModerno({
  weight: "600",
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <Link href="/" className="flex flex-col items-center">
      <Image src="/logo.svg" width={64} height={64} alt="logo" />
      <h2 className={cn(museo.className, "text-xl")}>IA Content</h2>
    </Link>
  );
};
