import Banner from "@/components/Home/Banner";
import image from '../components/Image/info_image.png'
import Image from "next/image";
import BrowseCategory from "@/components/Home/BrowseCategory";
import Bestselling from "@/components/Home/Bestselling";
import NewArrival from "@/components/Home/NewArrival";
import VideoSection from "@/components/Home/VideoSection";
import home_banner from "../components/Image/home_banner.jpeg";
import ExtraSliding from "@/components/Home/ExtraSliding";
import Parallax from "@/components/Home/Parallax";
import Panjabi from "@/components/Home/Panjabi";
import PreTShirt from "@/components/Home/PreTShirt";
import Gallery from "@/components/Home/Gallery";
import Polo_shirt from "@/components/Home/Polo_shirt";
import Sports_shirt from "@/components/Home/Sports_shirt";
import Subscribe from "@/components/Home/Subscribe";
import Feedback from "@/components/Home/Feedback";

export default function Home() {
  return (
    <div>
      <div id="modal-root"></div>
      <Banner></Banner>
      <div className="mx-28 my-5">
        <Image
          src={image}
          width={2000}
          alt="info"
        ></Image>
      </div>
      <BrowseCategory></BrowseCategory>
      <Bestselling></Bestselling>
      <NewArrival></NewArrival>
      <VideoSection></VideoSection>
      <div className="px-[4.5%] mb-12">
        <Image
          src={home_banner}
          width={2000}
          alt="home_banner"
        ></Image>
      </div>
      <ExtraSliding></ExtraSliding>
      <Parallax></Parallax>
      <Panjabi></Panjabi>
      <PreTShirt></PreTShirt>
      <Gallery></Gallery>
      <Polo_shirt></Polo_shirt>
      <Sports_shirt></Sports_shirt>
      <Feedback></Feedback>
      <Subscribe></Subscribe>
      
    
    </div>
  );
}
