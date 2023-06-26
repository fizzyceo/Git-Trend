import { FC } from "react";
import {
  nodejsContributions,
  pythonContributions,
  nodejsForks,
  nodejsStars,
  pythonForks,
  pythonStars,
} from "@/constants/docCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/DocContent";
import Code from "./Code";
import SubDocs from "./SubDocs";

interface DocsProps {}

const Docs: FC<DocsProps> = ({}) => {
  return (
    <Tabs defaultValue="stars" className="max-w-2xl w-full flex flex-col">
      <TabsList className="mx-auto">
        <TabsTrigger value="stars">Stars</TabsTrigger>
        <TabsTrigger value="forks">Forks</TabsTrigger>
        <TabsTrigger value="contributions">Contributions</TabsTrigger>
      </TabsList>
      <TabsContent value="stars">
        <SubDocs nodejs={nodejsStars} python={pythonStars} />
      </TabsContent>
      <TabsContent value="forks">
        <SubDocs nodejs={nodejsForks} python={pythonForks} />
      </TabsContent>
      <TabsContent value="contributions">
        <SubDocs nodejs={nodejsContributions} python={pythonContributions} />
      </TabsContent>
    </Tabs>
  );
};

export default Docs;
