import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/DocContent";
import Code from "./Code";

interface SubDocsProps {
  nodejs: string;
  python: string;
}

const SubDocs: FC<SubDocsProps> = ({ nodejs, python }) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">Node.js</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent className="overflow-x-scroll" value="nodejs">
        <Code code={nodejs} language="javascript" animated show />
      </TabsContent>
      <TabsContent className="overflow-x-scroll" value="python">
        <Code code={python} language="python" animated show />
      </TabsContent>
    </Tabs>
  );
};

export default SubDocs;
