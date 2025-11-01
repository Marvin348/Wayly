import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import footerData from "@/footerData";
import NewsletterSignup from "@/components/layout/footer/NewsletterSignup";
const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (heading) =>
    setOpenSection((prev) => (prev === heading ? null : heading));

  return (
    <footer className="bg-footer text-white py-8 mt-16">
      <div className="container">
        <nav className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {footerData.map((item) => (
            <div
              key={item.heading}
              className="border-b border-gray-500 first:border-t md:border-none"
            >
              {/* Mobile Heading */}
              <div
                className="flex items-center justify-between py-4 cursor-pointer md:hidden"
                onClick={() => toggleSection(item.heading)}
              >
                <h3 className="font-semibold">{item.heading}</h3>
                <FaChevronDown
                  className={`text-gray-300 mr-8 transition-transform duration-300 cursor-pointer ${
                    openSection === item.heading ? "rotate-180" : ""
                  }`}
                />
              </div>
              {/* Mobile Content (Accordion) */}
              {openSection === item.heading && (
                <ul className="md:hidden">
                  {item.label.map((label) => (
                    <li
                      className="py-1 text-gray-300 text-sm last:pb-5"
                      key={label}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              )}

              {/**Desktop */}
              <div className="hidden md:block">
                <h3 className="font-semibold text-[1.05rem] mb-4">
                  {item.heading}
                </h3>
                <ul>
                  {item.label.map((label) => (
                    <li className="py-1 text-sm text-gray-300" key={label}>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <NewsletterSignup />
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
