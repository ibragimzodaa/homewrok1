import Image from "next/image";
import long from "../../src/components/img/Rectangle 16.png";
import long2 from "../../src/components/img/Rectangle 14.png";
import house2 from "../../src/components/img/Rectangle 14.png"
import logo from "../../src/components/img/Our Partners.png"
import vid from "../../src/components/img/Video.png"
import { Button } from "./cva/button/button";
import I from '../components/img/Rectangle 23.png'
import Icon from '../components/img/Our Partners.png'
import bg from '../components/img/BG (2).png'
import { TextField } from "@mui/material";
export default function Home() {
  return (
    <>
      <div className="container py-[100px] flex items-center justify-between">
        <Image
          src="/IMG (1).png"
          width={1000}
          height={0}
          alt=""
          className="w-[40%]"
        />
        <div className="w-[50%]">
          <h2 className="text-[28px] font-semibold text-[#056088]">
            Our company
          </h2>
          <p className="text-[22px] font-medium w-[60%] my-[20px] text-[#434343] ">
            Debuilds is a team of architects, interior design, and contractors
            who help our clients not only to build their dream building, but
            also to feel comfortable after the building is used.
          </p>
          <p className="text-[20px] font-medium  text-[#434343] ">
            We already handled
          </p>
          <div className="flex gap-[15px] text-[22px] mt-[10px] text-[#056088] font-semibold">
            <p>50+ Clients</p>
            <p>50+ Clients</p>
            <p>50+ Clients</p>
          </div>
        </div>
      </div>

      <section className="container flex flex-col text-center items-center mx-auto">
        <div className="bg flex flex-col items-center">
          <h2 className="text-[28px] font-semibold text-[#056088]">
            Our services
          </h2>
          <p className="text-[20px] mt-[20px] w-[60%]">
            Our services include building new buildings and renovating old
            buildings
          </p>
        </div>
        <div className="flex flex-wrap w-[100%] mt-[60px] justify-between">
          <div className="w-[310px] h-[240px] text-start p-[20px]">
            <Image src="/imba.png" alt="" width={60} height={0} />
            <h1 className="text-[22px] text-[#434343] my-[10px] font-medium">
              Design building/house
            </h1>
            <p className="w-[70%] text-[#434343] text-[17px] font-normal">
              We have an architect for design new buildings
            </p>
          </div>
          <div className="w-[310px] h-[240px] text-start p-[20px]">
            <Image src="/imba.png" alt="" width={60} height={0} />
            <h1 className="text-[22px] text-[#434343] my-[10px] font-medium">
              Design building/house
            </h1>
            <p className="w-[70%] text-[#434343] text-[17px] font-normal">
              We have an architect for design new buildings
            </p>
          </div>
          <div className="w-[310px] h-[240px] text-start p-[20px]">
            <Image src="/imba.png" alt="" width={60} height={0} />
            <h1 className="text-[22px] text-[#434343] my-[10px] font-medium">
              Design building/house
            </h1>
            <p className="w-[70%] text-[#434343] text-[17px] font-normal">
              We have an architect for design new buildings
            </p>
          </div>
          <div className="w-[310px] h-[240px] text-start p-[20px]">
            <Image src="/imba.png" alt="" width={60} height={0} />
            <h1 className="text-[22px] text-[#434343] my-[10px] font-medium">
              Design building/house
            </h1>
            <p className="w-[70%] text-[#434343] text-[17px] font-normal">
              We have an architect for design new buildings
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-[100px] flex flex-col text-center items-center mx-auto">
        <div className="bg flex flex-col items-center">
          <h2 className="text-[28px] font-semibold text-[#056088]">
            Our benefits
          </h2>
          <p className="text-[20px] mt-[20px] w-[60%]">
            Here our benefits if you collaboration with our team
          </p>
        </div>
        <div className="flex flex-wrap w-[100%] mt-[60px] justify-between">
          <div
            className="w-[420px] bg-red-500 h-[310px] bg-cover bg-center flex flex-col items-center p-[20px] mb-[50px]"
            style={{
              backgroundImage: "url('/useless.png')",
            }}
          >
            <Image src="/clave.png" alt="" width={60} height={0} />
            <h1 className="text-[22px] text-white mt-[40px] mb-[40px] font-semibold">
              Customizable design
            </h1>
            <p className="w-[80%] text-white text-[17px] font-medium">
              We can design your buildings, but we open if you want to customize
              your design or if you have architect
            </p>
          </div>
          <div
            className="w-[420px] bg-red-500 h-[310px] bg-cover bg-center flex flex-col items-center p-[20px]"
            style={{
              backgroundImage: "url('/useless.png')",
            }}
          >
            <Image src="/clave.png" alt="" width={60} height={0} />
            <h1 className="text-[22px] text-white mt-[40px] mb-[40px] font-semibold">
              Customizable design
            </h1>
            <p className="w-[80%] text-white text-[17px] font-medium">
              We can design your buildings, but we open if you want to customize
              your design or if you have architect
            </p>
          </div>
          <div
            className="w-[420px] bg-red-500 h-[310px] bg-cover bg-center flex flex-col items-center p-[20px]"
            style={{
              backgroundImage: "url('/useless.png')",
            }}
          >
            <Image src="/clave.png" alt="" width={60} height={0} />
            <h1 className="text-[22px] text-white mt-[40px] mb-[40px] font-semibold">
              Customizable design
            </h1>
            <p className="w-[80%] text-white text-[17px] font-medium">
              We can design your buildings, but we open if you want to customize
              your design or if you have architect
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-[100%] mt-[-100px] bg-cover bg-center h-[1000px] mb-[50px]"
        style={{
          backgroundImage: "url('/Rectangle 38.png')",
        }}
      >
        <section className="max-w-7xl m-auto flex gap-[20px] h-[460px] mb-[100px] mt-[50px]">
          <div className="mt-[120px] max-w-7xl m-auto flex gap-[20px] h-[460px] mb-[200px]">
            <div className="grid grid-cols-1 gap-[20px] h-[100%]">
              <Image src={long2} alt="" />
              <Image src={long2} alt="" />
            </div>
            <div className="h-[100%]">
              <Image src={long} alt="" />
            </div>
            <div className="h-[100%] grid grid-cols-1 gap-[20px]">
              <Image src={long2} alt="" />
              <Image src={long2} alt="" />
            </div>
            <div className="h-[100%] grid grid-cols-1 gap-[20px]">
              <div className="flex gap-[20px]">
                <Image className="h-[100%] w-[50%]" src={long} alt="" />
                <div className="grid grid-cols-1 gap-[20px]">
                  <Image src={long2} alt="" />
                  <Image src={long2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
       <div className="flex items-center container">
        <div className="bg-[white] w-[300px] p-[20px]">
        <h1 className="text-[#056088] text-[24px] font-semibold">What our clients say?</h1>
        <p className="text-[#434343] w-[195px] mt-[10px] mb-[15px]">See what our clients say about their new home</p>
        <Button color={"primary"} size={"medium"}>See more</Button>
        </div>
        <Image height={100} width={900} className="relative top-[50px]" src={I} alt=""/>
       </div>
      </section>
      <div className="flex container justify-between mb-[50px]">
      <Image src={Icon} alt=""/>
      <Image src={Icon} alt=""/>
      <Image src={Icon} alt=""/>
      <Image src={Icon} alt=""/>
      <Image src={Icon} alt=""/>
      <Image src={Icon} alt=""/>
      </div>
      <div className="container text-center">
      <Image className="mt-[50px] mb-[50px] ml-[150px]" src={vid} alt=""/>
      </div>
      <div className="bgImage">
        <h1>Want to get our offer updates and news?</h1>
        <p>Submit your e-mail and we will give you update about information and discount. Every single week. (not spamming)</p>
        <TextField placeholder="Enter your e-mail here"/>
        <button className="bg-[blue] p-[15px] text-[white]">Submit</button>
      </div>
    </>
  );
}
