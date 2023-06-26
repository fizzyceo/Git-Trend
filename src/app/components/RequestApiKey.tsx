"use client";
import { FC, useState } from "react";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import { Button } from "./ui/Button";
import { toast } from "react-hot-toast";
import { Copy } from "lucide-react";
import { CreateApiData } from "../../../types/api-key";
import Input from "./ui/Input";
import CopyButton from "./ui/CopyButton";

interface RequestAplKeyProps {}

const RequestAplKey: FC<RequestAplKeyProps> = ({}) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  async function createNewApiKey(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsCreating(true);

    try {
      const res = await fetch("/api/api-key/create");
      const data = (await res.json()) as CreateApiData;

      if (data.error || !data.createdApiKey) {
        if (data.error instanceof Array) {
          throw new Error(data.error.join(", "));
        }
        throw new Error(data.error ?? "Something went wrong");
      }

      const generatedApiKey = data.createdApiKey.key;

      setApiKey(generatedApiKey);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);

        return;
      }
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <div className="py-32 mx-auto w-full flex flex-col items-center gap-8">
      <LargeHeading className="dark:text-[#82d87e]" size="default">
        Request syntaxe
      </LargeHeading>
      <Paragraph size="default">/api/v1/gittrend</Paragraph>
      <form
        onSubmit={createNewApiKey}
        className="mt-6 sm:flex sm:items-center w-screen  md:w-[600px]"
        action="#">
        <label htmlFor="emails" className="sr-only">
          Your API key
        </label>
        <div className="relative  rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          {/* Show a copy icon if API key was generated successfully */}
          {apiKey ? (
            <CopyButton 
            apkiKey={apiKey} 
            
            />
          ) : null}
          <Input
            
            apiKey={apiKey}
            
            placeholder="Request an API key to display it here"
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!!apiKey} isLoading={isCreating}>
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestAplKey;
