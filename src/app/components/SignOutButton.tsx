"use client";

import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const signInWithGoogle = async () => {
    setisLoading(true);
    try {
      await signOut();
    } catch (err) {
      toast.error("Error while signing in PLease try again");

      console.log(err);
    }
  };

  return <Button onClick={signInWithGoogle} isLoading={isLoading}>Signout</Button>;
};

export default SignOutButton;
