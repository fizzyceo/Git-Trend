"use client";
import { FC } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/DocContent";
import Code from "../components/Code";
import Docs from "../components/Docs";
import LargeHeading from "../components/ui/LargeHeading";
import Paragraph from "../components/ui/Paragraph";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="py-32 mx-auto max-w-3xl w-full flex flex-col items-center gap-8">
      <LargeHeading className="dark:text-[#82d87e]" size="default">
        Request syntaxe
      </LargeHeading>
      <Paragraph size="default">/api/v1/gittrend</Paragraph>

      <Docs />
    </div>
  );
};

export default page;
