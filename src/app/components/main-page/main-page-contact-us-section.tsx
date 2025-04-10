import Image from "next/image";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactForm from "./main-page-contact-form";

const MainPageContactUsSection = () => {
  return (
    <div className="relative">
      <Image
        src="/contact-us-bg.webp"
        className="w-full h-full absolute top-0 left-0 object-cover"
        alt="Contact Us"
        width={1000}
        height={1000}
      />

      <div className="relative z-10 py-10 px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-2">Contact Us</h2>
          <hr className="border-2 rounded-md border-white w-[50px]" />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
          {/* Contact Info Card */}
          <div className="w-full max-w-[622px] bg-white rounded-[16px] overflow-hidden">
            <div className="w-full h-64 sm:h-80 lg:h-[380px]">
              <Image
                src="/contact-person-img.webp"
                className="w-full h-full object-cover"
                alt="Contact Person"
                width={1000}
                height={1000}
              />
            </div>
            <div className="w-full bg-[#57DD8F] px-5 py-6">
              <h3 className="font-bold text-2xl sm:text-3xl text-[#154A62] mb-4">Get in Touch</h3>
              <div className="flex flex-col gap-4 text-[#154A62] text-sm sm:text-base">
                <span className="flex items-start gap-3">
                  <FaLocationDot className="mt-1" />
                  Address: 222 Test Ave Salem, IL 22222
                </span>
                <span className="flex items-start gap-3">
                  <FaPhone className="mt-1" />
                  Phone Number: +1 (222) 222-2222
                </span>
                <span className="flex items-start gap-3">
                  <MdEmail className="mt-1" />
                  Email Address: info@georgetaylorfoundation.com
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="w-full max-w-[622px] bg-white rounded-[16px] p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageContactUsSection;
