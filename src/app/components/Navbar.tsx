// import { authOptions } from '@/lib/auth'
import { getServerSession } from "next-auth";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { buttonVariants } from "./ui/Button";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";
import { authOptions } from "@/lib/Auth";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50  top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700  flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Fizzy&apos;s API V1.0
        </Link>

        <div className="md:hidden flex flex-row items-center gap-5">
          <ThemeToggle />
          
          <MobileMenu session={session? true: false} />
        </div>

        <div className="hidden md:flex items-center  gap-4">
          <ThemeToggle />

          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}>
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/dashboard">
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
