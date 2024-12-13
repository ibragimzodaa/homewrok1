import Image from "next/image";
import React from "react";
import image1 from "./images/Mask Group (1).png";
import image2 from "./images/video (1).png";
import image3 from "./images/image 34.png";
import image4 from "./images/image 31.png"
import image5 from '../about/images/Mask Group.png'
import "./d.css"

const News = () => {
  return (
    <section className="container">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 p-4 lg:p-8">
        {/* Left Side Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[40px] font-semibold max-w-[444px]">
            Зерновой барабанный сепаратор "ЛУЧ" ЗСО
          </h1>
          <Image
            className="w-full max-w-[591.56px] h-auto mt-4"
            src={image1}
            alt=""
          />
          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            <Image
              className="w-[145.94px] h-[91.43px] object-cover"
              src={image1}
              alt=""
            />
            <Image
              className="w-[145.94px] h-[91.43px] object-cover"
              src={image1}
              alt=""
            />
            <Image
              className="w-[145.94px] h-[91.43px] object-cover"
              src={image1}
              alt=""
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-[14px] lg:text-[16px] max-w-[767px]">
            Зерноочистительный сепаратор "ЛУЧ" ЗСО (барабанного типа)
            предназначен для очистки зерна сельскохозяйственных культур от
            крупных, мелких и легких примесей на механизированных токах,
            элеваторах, ЗАВа и других объектах переработки зерна
          </p>
          <Image
            className="mt-6 w-full max-w-[767px] h-auto"
            src={image2}
            alt=""
          />
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-6 w-full">
            <button className="text-white font-semibold bg-[#FEAD04] w-full lg:w-[379px] h-[50px] cursor-pointer">
              Запитання про обладнання
            </button>
            <button className="text-black w-full lg:w-[379px] h-[50px] border border-black font-semibold">
              Готовые объекты
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-[50px] w-full">
        <button className="text-white font-semibold bg-[#FEAD04] w-full lg:w-[347px] h-[50px] cursor-pointer">
          Описание
        </button>
        <button className="text-black w-full lg:w-[347px] h-[50px] bg-[#EBEBEB]">
          Характеристики
        </button>
        <button className="text-black w-full lg:w-[347px] h-[50px] bg-[#EBEBEB]">
          Преимущества
        </button>
        <button className="text-black w-full lg:w-[347px] h-[50px] bg-[#EBEBEB]">
          Фото/Видео
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-4 lg:p-8">
        <div className="lg:max-w-[50%]">
          <h1 className="font-semibold text-[20px] lg:text-[26px] text-[#000000] mt-[10px] lg:mt-[20px]">
            Назначение:
          </h1>
          <p className="text-[#000000] text-[14px] lg:text-[16px] w-full lg:w-[647.22px] mt-[10px] lg:mt-[20px] mb-[10px] lg:mb-[20px]">
            Продукт Зерноочистительный барабанный сепаратор "ЛУЧ" ЗСО
            (барабанный тип) предназначен для очистки зерна сельскохозяйственных
            культур от крупных, мелких и легких примесей на механизированных
            токах, элеваторах, ЗАВах и других объектах переработки зерна
          </p>
          <h1 className="font-semibold text-[20px] lg:text-[26px] text-[#000000]">
            Описание:
          </h1>
          <p className="text-[#000000] text-[14px] lg:text-[16px] w-full lg:w-[647.22px] mt-[10px] lg:mt-[20px]">
            Продукт Зерноочистительная машина "ЛУЧ" ЗСО состоит из ситового
            (сито) и воздушного сепараторов. Исходное зерно, поступающее в
            барабанный сепаратор через приемный патрубок (входной лоток),
            продувается встречным потоком воздуха, при этом происходит отделение
            легких примесей. После чего зерно попадает в ситовой барабан (сито),
            где происходит его очистка от примесей, отличающихся по размерам.
            Полученные фракции очищенного зерна и примесей раздельно выводятся
            из машины через выпускные патрубки. Очистка сит производится блоками
            подвижных щёток и катков.
          </p>
          <p className="text-[#000000] text-[14px] lg:text-[16px] w-full lg:w-[647.22px] mt-[10px] lg:mt-[20px]">
            Ситовой барабанный сепаратор (ситовой барабан, сито) позволяет
            выполнять следующие операции: предварительную очистку, первичную
            очистку, вторичную очистку (сортировку, калибровку). Очищаемый
            материал попадает внутрь барабана после поступления через входной
            лоток.
          </p>
        </div>
        <div className="w-full lg:w-[789.17px] h-auto lg:h-[494.4px] mt-4 lg:mt-0">
          <Image className="w-full h-full object-contain" src={image1} alt="" />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-[22px] md:text-[26px] text-[#000000] mt-[20px] text-center md:text-left">
          Схемы очистки зерна в зерновом сепараторе "ЛУЧ" ЗСО
        </h1>
        <div className="flex justify-center flex-wrap gap-4 mt-[20px] md:mt-[30px]">
          <Image
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-auto"
            src={image3}
            alt=""
          />
          <Image
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-auto"
            src={image3}
            alt=""
          />
          <Image
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-auto"
            src={image3}
            alt=""
          />
        </div>
      </div>
      <div className="overflow-x-auto mt-[50px]">
        <table className="w-full border-collapse border border-gray-200 text-sm">
          <thead className="bg-yellow-400 text-left">
            <tr>
              <th className="p-4 border border-gray-300">Модель</th>
              <th className="p-4 border border-gray-300">
                Количество секций ситового барабана
              </th>
              <th className="p-4 border border-gray-300">
                Диаметр ситового барабана, мм
              </th>
              <th className="p-4 border border-gray-300">
                Мощность электромотора
              </th>
              <th className="p-4 border border-gray-300">
                Габаритные размеры, мм
              </th>
              <th className="p-4 border border-gray-300">Вес, кг</th>
              <th className="p-4 border border-gray-300">
                Предварительная очистка, т/ч
              </th>
              <th className="p-4 border border-gray-300">
                Первичная очистка, т/ч
              </th>
              <th className="p-4 border border-gray-300">
                Вторичная очистка (сортировка, калибровка), т/ч
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                model: "ЗСО-35",
                sections: "3",
                diameter: "600",
                power: "5.85*",
                dimensions: "3662×1056×2655",
                weight: "1675",
                preClean: "35",
                primaryClean: "15",
                secondaryClean: "5",
              },
              {
                model: "ЗСО-50",
                sections: "4",
                diameter: "600",
                power: "5.85*",
                dimensions: "4402×1056×2655",
                weight: "1925",
                preClean: "50",
                primaryClean: "30",
                secondaryClean: "6.5",
              },
              {
                model: "ЗСО-75",
                sections: "4",
                diameter: "900",
                power: "8.1*",
                dimensions: "5121×2594×4444",
                weight: "3040",
                preClean: "75",
                primaryClean: "50",
                secondaryClean: "10",
              },
              {
                model: "ЗСО-100",
                sections: "4",
                diameter: "1260",
                power: "12.6*",
                dimensions: "5618×3177×5237",
                weight: "3740",
                preClean: "100",
                primaryClean: "50",
                secondaryClean: "20",
              },
              {
                model: "ЗСО-150",
                sections: "4",
                diameter: "1260",
                power: "12.6*",
                dimensions: "6615×3177×5237",
                weight: "4350",
                preClean: "150",
                primaryClean: "100",
                secondaryClean: "25",
              },
              {
                model: "ЗСО-200",
                sections: "5",
                diameter: "1260",
                power: "6.6*",
                dimensions: "7693×3330×5332",
                weight: "5760",
                preClean: "200",
                primaryClean: "150",
                secondaryClean: "25",
              },
              {
                model: "ЗСО-300",
                sections: "6",
                diameter: "1900",
                power: "23.1*",
                dimensions: "8340×2670×5833",
                weight: "6700",
                preClean: "300",
                primaryClean: "200",
                secondaryClean: "30",
              },
            ].map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-yellow-100" : "bg-white"}
              >
                <td className="p-4 border border-gray-300">{row.model}</td>
                <td className="p-4 border border-gray-300">{row.sections}</td>
                <td className="p-4 border border-gray-300">{row.diameter}</td>
                <td className="p-4 border border-gray-300">{row.power}</td>
                <td className="p-4 border border-gray-300">{row.dimensions}</td>
                <td className="p-4 border border-gray-300">{row.weight}</td>
                <td className="p-4 border border-gray-300">{row.preClean}</td>
                <td className="p-4 border border-gray-300">
                  {row.primaryClean}
                </td>
                <td className="p-4 border border-gray-300">
                  {row.secondaryClean}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="font-semibold text-[26px] mt-[40px] mb-[20px]">Видео</h1>
        <div className="flex items-center justify-between flex-wrap gap-[20px]">
          <Image className="w-[650px] h-[250px]" src={image2} alt=""/>
          <Image className="w-[650px] h-[250px]" src={image2} alt=""/>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-[26px] mt-[40px] mb-[20px]">Фотографии</h1>
        <div className="flex items-center justify-between flex-wrap gap-[20px]">
          <Image className="w-[650px] h-[250px]" src={image4} alt=""/>
          <Image className="w-[650px] h-[250px]" src={image4} alt=""/>
          <Image className="w-[650px] h-[250px] mt-[40px]" src={image4} alt=""/>
          <Image className="w-[650px] h-[250px] mt-[40px]" src={image4} alt=""/>
        </div>
      </div>
      <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Другие товары этой категории</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>
      </div>
    </div>
    <div className="px-4 py-6 sm:px-6 lg:px-8"> 
      <h2 className="text-2xl font-bold mb-4">Нещодавно переглянуті товари</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-40">
            <Image
              src={image1}
              alt="Зерновой барабанный сепаратор ЛУЧ 3СО"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-sm mt-2">Зерновой барабанный сепаратор ЛУЧ 3СО</p>
        </div>
      </div>
    </div>
    <div className="flex bgImage items-center justify-around p-[20px] mb-[30px] flex-wrap">
        <div>
          <Image className="w-[200px]" src={image5} alt=""/>
        </div>
        <div>
          <h1 className="text-[35px] text-[white]">Форма обратной связи</h1>
          <p className="text-[24px] text-[white]">Заполните форму и мы свяжемся с вами</p>
        <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Имя"
                className="w-full px-4 py-2 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Телефон"
                className="w-full px-4 py-2 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-bold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default News;
