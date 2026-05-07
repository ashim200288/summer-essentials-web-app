import Image from "next/image";
import Banner from "@/components/Banner"
import TopGenerations from "@/components/TopGenerations";
import SummerCareTips from "@/components/SummerCareTips";
import BrandSection from "@/components/BrandSection";

export default function Home() {
  return (
    <div>
       <Banner/>
       <TopGenerations/>
      <SummerCareTips/>
      <BrandSection/>
    </div>
  );
}
