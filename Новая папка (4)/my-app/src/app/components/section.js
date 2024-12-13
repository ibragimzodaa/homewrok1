import Image from "next/image";
import othersCompany from "../assets/Others company.png";
import Image11 from "../assets/Image (11).png";
import Image12 from "../assets/Image (12).png";

const Section4 = () => {
  return (
    <div className="bg-gray-50">
      {/* Logo Section */}
      <section className="py-8 flex items-center justify-center gap-8">
        <Image src={othersCompany} alt="Hotels Logo" className="h-12" />
      </section>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-16 bg-white rounded-lg shadow-lg">
        <div className="w-full md:w-1/2">
          <Image
            src={Image11}
            alt="Relaxing Woman in Hotel"
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-full md:w-1/2 bg-yellow-100 p-6 rounded-lg">
          <blockquote className="italic text-gray-600">
            “Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.”
          </blockquote>
          <p className="mt-4 font-semibold">- Nazmul Nabeel</p>
        </div>
      </section>

      {/* Best Quality Hotels Section */}
      <section className="p-8 md:p-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Best Quality Hotels</h2>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* Star Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"].map((star) => (
            <button
              key={star}
              className="px-4 py-2 border rounded-lg hover:bg-blue-500 hover:text-white"
            >
              {star}
            </button>
          ))}
          <button className="text-blue-500 underline">View All</button>
        </div>

        {/* Hotel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[{
            title: "Swimming pool and beach of luxury hotel",
            img: Image12,
            price: "$250 /NIGHT",
          },
          {
            title: "InterContinental Fujairah Resort Club",
            img: Image12,
            price: "$250 /NIGHT",
          },
          {
            title: "Burj Al Arab - Jumeirah Street - Dubai",
            img: Image12,
            price: "$250 /NIGHT",
          }].map((hotel, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <Image
                src={hotel.img}
                alt={hotel.title}
                className="rounded-lg w-full"
              />
              <h3 className="mt-4 text-lg font-semibold">{hotel.title}</h3>
              <p className="text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="font-bold text-blue-500">{hotel.price}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section4;
