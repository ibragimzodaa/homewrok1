import Image from "next/image";
import React from "react";
import Image1 from "../../../../components/img/Rectangle 23.png";
import Link from "next/link";

const GalleryById = async ({ params }) => {
  let { gallery } = await params;
  let data = [
    {
      id: "1",
      name: "Interior design",
      desc: "3 Months work time",
    },
    {
      id: "2",
      name: "Interior design",
      desc: "3 Months work time",
    },
    {
      id: "3",
      name: "Interior design",
      desc: "3 Months work time",
    },
    {
      id: "4",
      name: "Interior design",
      desc: "3 Months work time",
    },
    {
      id: "5",
      name: "Interior design",
      desc: "3 Months work time",
    },
    {
      id: "6",
      name: "Interior design",
      desc: "3 Months work time",
    },
  ];
  return (
    <div className="py-[100px] flex justify-between flex-wrap container">
      {data.map((el) => {
        if(el.id == gallery) {

        return (
          <div
            className="shadow-gray-600 mt-[25px] shadow-xl py-[10px] px-[25px] rounded-[10px] w-[380px]
      "
          >
            <Image className="w-[400px] h-[200px]" src={Image1} alt="" />
            <div className="flex flex-col text-[20px] mt-[30px] font-normal gap-[5px]">
              <p className="text-[#056088] font-semibold text-[24px]">
                {el.name}
              </p>
              <p className="text-[#434343] font-semibold text-[16px]">
                {el.desc}
              </p>
            </div>
            <Link href={`/gallery/${el.id}`}>
              <button className="px-[20px] mt-[25px] py-[15px] bg-[#0894B9] font-medium text-white text-[19px]">
                See process
              </button>
            </Link>
          </div>
        );
      }
      })}
    </div>
  );
};

export default GalleryById;
