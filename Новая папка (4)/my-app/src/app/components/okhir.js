import Image from "next/image";
import personImage from "../assets/VJdvLa-download-happy-blackman-png.png"; // Replace with the actual path to your image
import logoImage from "../assets/Hotels.com-Logo.wine 1.png"; // Replace with the actual path to your logo

const Okhir = () => {
  return (
    <div className="bg-gray-50">
      {/* Subscription Section */}
      <section className="flex flex-col md:flex-row items-center justify-around p-6 md:p-16 bg-white rounded-lg shadow-lg mb-8 gap-8">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
            Subscribe for our mailing list to get latest updates and offers
          </h2> 
          <p className="text-gray-500 text-base sm:text-sm md:text-base lg:text-lg w-full sm:w-[200px] md:w-[400px] lg:w-[600px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy{" "}
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg   :bg-blue-600 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={personImage}
            alt="Person"
            className="rounded-lg"
            width={300}
            height={300}
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-8">
        <div className="container mx-auto flex flex-wrap gap-8 justify-around px-4">
          {/* Logo and Description */}
          <div className="w-full sm:w-auto text-center sm:text-left">
            <Image
              src={logoImage}
              alt="Logo"
              width={100}
              height={50}
              className="mb-4 mx-auto sm:mx-0"
            />
            <p className="text-gray-600 max-w-xs mx-auto sm:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex justify-center sm:justify-start gap-4 mt-4">
              <p href="#" className="text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </p>
              <p className="text-pink-500">
                <i className="fab fa-instagram"></i>
              </p>
              <p className="text-red-500">
                <i className="fab fa-google"></i>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Home</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <p className="  :text-blue-500">
                  Booking
                </p>
              </li>
              <li>
                <p className="  :text-blue-500">
                  Facilities
                </p>
              </li>
              <li>
                <p className="  :text-blue-500">
                  Location
                </p>
              </li>
              <li>
                <p className="  :text-blue-500">
                  Contact
                </p>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <p className="  :text-blue-500">
                  About Us
                </p>
              </li>
              <li>
                <p className="  :text-blue-500">
                  Help Center
                </p>
              </li>
              <li>
                <p className="  :text-blue-500">
                  Privacy Policy
                </p>
              </li>
              <li>
                <p className="  :text-blue-500">
                  FAQs
                </p>
              </li>
            </ul>
          </div>

          {/* App Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get the app</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <p className="  :text-blue-500">
                  iOS App
                </p>
              </li>
              <li>
                <p className="  :text-blue-500">
                  Android App
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Okhir;
