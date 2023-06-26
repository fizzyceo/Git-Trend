import Image from "next/image";
import styles from "./page.module.css";
import Paragraph from "./components/ui/Paragraph";
import LargeHeading from "./components/ui/LargeHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Git Trends API',
  description: 'Free & open-source repositories trends API ',
  icons:{
    icon:'/integration.png'
  }
}
export default function Home() {
  return (
    <main className="max-w-screen min-h-screen flex items-center justify-center mx-auto py-20">
      <div className="flex items-center justify-center flex-row flex-wrap lg:flex-nowrap gap-8">
        <div className=" ">
          <LargeHeading
            size="large"
            className="dark:text-[#82d87e] font-extrabold">
            Easily Explore <br /> GitHub trends.
          </LargeHeading>

          <Paragraph className="md:text-left" size="default">
            Explore github&apos;s trendy repositories with{" "}
            <a href="/" className="underline font-bold dark:text-[#82d87e]">
              {" "}
              our API
            </a>{" "}
            <br /> from the most stars, the most forked or even the most
            contributors
          </Paragraph>
        </div>
        <img src="ill.svg" className="w-[500px] lg:w-[700px]" alt="" />
      </div>
    </main>
  );
}
