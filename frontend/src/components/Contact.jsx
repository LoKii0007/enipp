import { useState } from "react";
import supabase from "@/supabase/supabase";
import useTheme from "@/hooks/ThemeContex";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { companyInfo } from "@/utils/constants";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([formData]);
        
      if (error) throw error;
      
      toast.success("Message sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error('An error occurred. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div
      className={` ${
        theme === "dark" ? "bg-[#040B11] text-white" : "bg-[#ffffff] text-black"
      }  p-10 flex flex-col items-center `}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="border border-gray-700 p-6 text-center flex flex-col gap-5">
          <span className="text-enipp-purple1 flex justify-center items-center text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
          </span>
          <h2 className="font-bold text-xl mt-2">Location</h2>
          <p className="font-sans">{companyInfo.address}</p>
        </div>
        <div className="border border-gray-700 p-6 text-center flex flex-col gap-5">
          <span className="text-enipp-purple1 flex justify-center items-center text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-envelope-open"
              viewBox="0 0 16 16"
            >
              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" />
            </svg>
          </span>
          <h2 className="font-bold text-xl mt-2">Email</h2>
          <p className="font-sans">{companyInfo.email}</p>
        </div>
        <div className="border border-gray-700 p-6 text-center flex flex-col gap-5">
          <span className="text-enipp-purple1 flex justify-center items-center text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
          </span>
          <h2 className="font-bold text-xl mt-2">Phone</h2>
          <p className="font-sans">{companyInfo.phone}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10">Get In Touch</h2>
      <p className="text-gray-400 mb-6">
        Browse through the most frequently asked questions
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-1/2 p-3 bg-[#C2C3C526] border border-gray-600 "
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-1/2 p-3 bg-[#C2C3C526] border border-gray-600 font-sans "
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 mt-4 bg-[#C2C3C526] border border-gray-600 font-sans"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mt-4 bg-[#C2C3C526] border border-gray-600 h-32 font-sans"
          required
        ></textarea>
        <div className="w-full grid grid-cols-2 gap-12 justify-center items-center mt-5">
          <button
            type="submit"
            className={`flex items-center justify-center gap-2 border-enipp-purple1 after:bg-gradient-to-r after:from-enipp-purple1 after:to-enipp-purple2 border  ${
              theme === "dark"
                ? " text-white"
                : " text-black"
            } tf-button relative p-4 px-10`}
            disabled={loading}
          >
            <div className="z-20"></div>
            <span className="z-20">
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Send Message"}
            </span>
          </button>
          <Link
            to={companyInfo.social.calendar}
            target="_blank"
            className={`flex items-center justify-center gap-2 border-enipp-purple1 after:bg-gradient-to-r after:from-enipp-purple1 after:to-enipp-purple2 border  ${
              theme === "dark"
                ? " text-white"
                : " text-black"
            } tf-button relative p-4 px-10`}
          >
            <span className="z-20">
              Schedule a Call
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
