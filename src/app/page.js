import Banner from "@/components/Banner/Banner";
import Attar from "@/components/Home/Attar/Attar";
import Clothing from "@/components/Home/Clothing/Clothing";
import Food from "@/components/Home/Food/Food";
import HotDeals from "@/components/Home/HotDeals/HotDeals";
import LatestProduct from "@/components/Home/LatestProduct/LatestProduct";
import Others from "@/components/Home/Others/Others";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner> 
      <HotDeals></HotDeals>
      <LatestProduct></LatestProduct>
      <Attar></Attar>
      <Clothing></Clothing>
      <Others></Others>
      <Food></Food>

    </div>
  );
}
