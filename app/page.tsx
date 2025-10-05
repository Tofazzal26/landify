import Banner from "@/components/Banner/page";
import FastSolution from "@/components/FastSolution/page";
import HappyClient from "@/components/HappyClient/page";
import OurService from "@/components/OurService/page";
import Pricing from "@/components/Pricing/page";
import Seamless from "@/components/Seamless/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <FastSolution />
      <OurService />
      <Seamless />
      <HappyClient />
      <Pricing />
    </div>
  );
}
