import Image from "next/image";
import home from "./assets/Image.png";
import bed from "./assets/Image (2).png";
import pool from "./assets/Image (1).png";
import four from "./assets/Group 78.png";
import rectangle from "./assets/Rectangle 847.png";
import { Button } from "@mui/material";
import Section4 from "./components/section";
import Okhir from "./components/okhir";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
        <div className="text-2xl font-bold text-gray-800">Hotelo</div>
        <nav className="hidden md:flex gap-6 text-gray-600">
          <p className="cursor-pointer ">
            Booking
          </p>
          <p className="cursor-pointer ">
            Facilities
          </p>
          <p className="cursor-pointer ">
            About Us
          </p>
          <p className="cursor-pointer ">
            Location
          </p>
          <p className="cursor-pointer ">
            Contact
          </p>
        </nav>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md  :bg-blue-600">
          Sign In
        </button>
      </header>

      <main className="px-8 py-12">
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Find Your Best Hotel <br /> for Deals
            </h1>
            <p className="text-gray-500 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2H5c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Jun 10 - 14"
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <div className="flex items-center gap-2 border-b pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2-2 .895-2 2zM4 7c1.104 0 2-.895 2-2S5.104 3 4 3s-2 .895-2 2 .895 2 2 2zm12 10v-6M8 7h8v4c1.104 0 2 .895 2 2v4h-6c-1.104 0-2-.895-2-2zm-6 4v4h6c0 1.104-.896 2-2 2h-6v-4h-2V3h2z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="2 Guests"
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <div className="flex items-center gap-2 border-b pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 11c0 1.105-.896 2-2 2h-6c-1.104 0-2-.895-2-2s.896-2 2-2h6c1.104 0 2 .895 2 2z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="United States"
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-md  :bg-blue-600">
                Search
              </button>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-7xl mx-auto flex justify-evenly">
          <div className="">
            <Image
              src={home}
              alt="Hotel Exterior"
              layout="responsive"
              className="rounded-lg w-[800px]"
            />
          </div>
          <div className="">
            <Image
              src={pool}
              alt="Swimming Pool"
              layout="responsive"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src={bed}
              alt="Hotel Room"
              layout="responsive"
              width={300}
              height={200}
              className="rounded-lg mt-[20px]"
            />
          </div>
        </section>
      </main>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div>
            <h2 className="text-3xl font-bold  mb-8">Facilities & Service</h2>
            <p className="text-gray-500 text-[16px] sm:text-[14px] md:text-[16px] lg:text-[18px] w-full sm:w-[200px] md:w-[400px] lg:w-[600px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[30px]">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image src={four} alt="" className="ml-[100px]" />
              <h3 className="text-lg font-semibold text-gray-700 mt-[20px]">
                Private Workspace
              </h3>
              <p className="text-gray-500 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image src={four} alt="" className="ml-[100px]" />
              <h3 className="text-lg font-semibold text-gray-700 mt-[20px]">
                Parking Area
              </h3>
              <p className="text-gray-500 mt-2">
                Enjoy delicious meals delivered right to your room, any time.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image src={four} alt="" className="ml-[100px]" />
              <h3 className="text-lg font-semibold text-gray-700 mt-[20px]">
                Free Wifi
              </h3>
              <p className="text-gray-500 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image src={four} alt="" className="ml-[100px]" />
              <h3 className="text-lg font-semibold text-gray-700 mt-[20px]">
                Breakfast
              </h3>
              <p className="text-gray-500 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={rectangle} // Replace with your image path
            alt="Luxury Hotel"
            // width={800}
            // height={500}
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <h1 className="text-3xl font-bold mb-4">
            Finest Luxury Hotels & Resort
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
            <div>
              <h2 className="text-xl font-bold">120K+</h2>
              <p className="text-gray-500">Website Users</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">110K+</h2>
              <p className="text-gray-500">Happy Clients</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">20K+</h2>
              <p className="text-gray-500">Active Hotels</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">8Y+</h2>
              <p className="text-gray-500">Company Years</p>
            </div>
          </div>

          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg  :bg-blue-600">
            Explore More
          </button>
        </div>
      </div>
      <Section4 />
      <Okhir />
    </div>
  );
}
