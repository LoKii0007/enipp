import ContactForm from "@/components/Contact";
import PageHeading from "@/components/PageHeading";
import React, {useEffect} from "react";
import useTheme from "@/hooks/ThemeContex";

const ContactUs = () => {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <>
      <div className={`contact-us min-h-[calc(100vh-408.89px)] w-full ${
            theme === "dark" ? "bg-enipp-dark1" : "bg-[#EEEEEE]"
          }`}>
        <PageHeading heading="Contact Us" />
        <div
          className={`flex justify-center items-center w-full py-12 ${
            theme === "dark" ? "bg-enipp-dark1" : "bg-[#EEEEEE]"
          }`}
        >
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
