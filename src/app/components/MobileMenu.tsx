'use client'
import { FC, HTMLProps, useState } from "react";
import { buttonVariants } from "./ui/Button";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  session: boolean;
}


const MobileMenu: FC<MobileMenuProps> = ({ session }) => {
    const [ShowMobileMenu,setShowMobileMenu]= useState(false);
    return (
    <div className="relative">
    <Menu className="w-7 h-7 dark:text-white cursor-pointer" onClick={()=>setShowMobileMenu(shown=>!shown)}/>
    
        <div className={`absolute dark:bg-slate-800 w-[105vw]  bg-slate-200 top-[180%] ${ShowMobileMenu ? '-right-[100%]':'right-[100vw]'} transition-all p-3 rounded-md flex flex-col items-center gap-5 `}>
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
  );
};

export default MobileMenu;
